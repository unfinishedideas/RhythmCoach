import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';
import snareSample from './../audio/snare.ogg';
import hatSample from './../audio/hat.ogg';
import { useDispatch } from "react-redux";
import { changeCurrentTarget, updateTargetDistance, updateAccuracy, metronomeSwitch, updateRhythm } from "./../actions";
import UI from "./interface/UI";

function ToneTest() {
  // Initializing ====================================================================================================
  let transportOn = false;
  let listening = true;
  let looper = new Tone.Loop(song, '16n');

  // Redux
  let dispatch = useDispatch();

  // Load Samples
  let kickBuffer = new Tone.Buffer(kickSample);
  let snareBuffer = new Tone.Buffer(snareSample);
  let hatBuffer = new Tone.Buffer(hatSample);

  let kickPlayer = new Tone.Player(kickBuffer, function () { console.log('kick sample initialized'); }).toMaster();
  let snarePlayer = new Tone.Player(snareBuffer, function () { console.log('snare sample initialized'); }).toMaster();
  let hatPlayer = new Tone.Player(hatBuffer, function () { console.log('hat sample initialized'); }).toMaster();

  // Playback ========================================================================================================

  // IDEA: Maybe instead of calculating the next rhythm on a loop at the last 16th note, calculate it once the rhythm array is empty.
  Tone.Buffer.on('load',
    function onLoad() {
      console.log('All samples loaded');
      Tone.context.latencyHint = 'fastest';
      Tone.Transport.bpm.value = 100;
      Tone.Transport.loopStart = 0;
      Tone.Transport.loopEnd = '2m'
      Tone.Transport.loop = true;

      looper.start(0);
    },
    function onError() {
      console.log("Something didn't load properly");
    }
  );

  // Eventually make this state?
  let targetTick = 0;
  let counter = 1;
  let firstTick = null;
  let secondTick = null;
  let sixteenthSpacing = null;
  let nextTargetTick = null;
  let aboutToLoop = false;
  let remainingTicks = 0;
  let distanceToNextNote = 0;
  let targetRhythmArray = [5, 13];

  function song() {
    // Rhythm Key
    // 1  e  +  a     2  e  +  a     3  e  +  a     4  e  +  a  
    // 1  2  3  4     5  6  7  8     9  10 11 12    13 14 15 16
    const hatRhythmArray = [1, 3, 5, 7, 9, 11, 13, 15];
    const snareRhythmArray = [5, 13];
    const kickRhythmArray = [1, 3, 0, 9, 10, 12];
    // const targetRhythmArray = [1, 3, 5, 7, 9, 11, 13, 15];
    // const targetRhythmArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    // const targetRhythmArray = [1,3,4,5,7,11,13]

    // Calculate the distance between ticks. 16th spacing
    if (counter === 1) {
      firstTick = Tone.Transport.getTicksAtTime();
    } else if (counter === 2) {
      secondTick = Tone.Transport.getTicksAtTime();
    }
    if (secondTick !== null && counter === 3) {
      sixteenthSpacing = secondTick - firstTick;
    }

    // Metronome (using next 16th note on 'else if' to reduce redux calls)
    if (counter === 1 || counter === 5 || counter === 9 || counter === 13) {
      dispatch(metronomeSwitch(true));
    } else if (counter === 2 || counter === 6 || counter === 10 || counter === 14) {
      dispatch(metronomeSwitch(false));
    }

    // Set the ticks for the target note
    // If the transport is about to loop get a more accurate reading of the target ticks coming up. .position[0] changes based on # of measures.
    let position = Tone.Transport.position
    if (position[0] === '1' && position[2] === '3' && position[4] === '3') {
      aboutToLoop = true;
    }
    if (aboutToLoop === true) {
      remainingTicks = (sixteenthSpacing * 16) - (sixteenthSpacing * targetRhythmArray[targetRhythmArray.length - 1])
      nextTargetTick = (targetRhythmArray[0] * sixteenthSpacing) - sixteenthSpacing;
      distanceToNextNote = nextTargetTick + remainingTicks;
      targetTick = remainingTicks * -1;
      aboutToLoop = false;

      // dispatch(changeCurrentTarget(remainingTicks));
      // dispatch(updateTargetDistance(distanceToNextNote));

      // console.log('%%%%%%%%');
      // console.log('loop!');
      // console.log('remainingTicks', remainingTicks);
      // console.log('next target tick:', nextTargetTick);
      // console.log('distance to next: ', distanceToNextNote);
      // console.log('%%%%%%%%');
    }
    else if (targetRhythmArray.includes(counter)) {
      targetTick = Tone.Transport.getTicksAtTime();

      let nextIndex = targetRhythmArray.indexOf((counter)) + 1;

      // If the next index is larger than the array it must be index 0
      if ((nextIndex + 1) > targetRhythmArray.length) {
        nextIndex = 0;
      }
      // Get the value in ticks for the next target note
      nextTargetTick = firstTick + (targetRhythmArray[nextIndex] * sixteenthSpacing) - sixteenthSpacing;

      // Add a measure of 16th notes to the count if it's a new measure
      if (nextIndex === 0) {
        nextTargetTick += + (sixteenthSpacing * 16)
      }
      distanceToNextNote = nextTargetTick - targetTick;
      // console.log('currentNote ticks: ', targetTick)
      // console.log('next target ticks: ', nextTargetTick)
      // console.log('------')
    }

    // Backing track playback
    // Hats
    if (hatRhythmArray.includes(counter)) {
      hatPlayer.start();
    }
    // Snares
    if (snareRhythmArray.includes(counter)) {
      snarePlayer.start();
      // console.log('you want', Tone.Transport.getTicksAtTime())
    }
    // Kicks
    if (kickRhythmArray.includes(counter)) {
      kickPlayer.start();
    }

    // Reset Counter on beat 1
    if (counter < 16) {
      counter += 1
    }
    else {
      counter = 1;
    }
  }


  // Game stuff ======================================================================================================

  function compareTime() {
    // Target is currently wrong on loop
    let inputTick = Tone.Transport.getTicksAtTime();
    let desiredTarget = targetTick;

    let difference = inputTick - desiredTarget;

    if (difference > (distanceToNextNote / 2)) {
      desiredTarget = nextTargetTick;
      difference = inputTick - desiredTarget
    };
    dispatch(updateAccuracy(difference));

    // console.log('----------------------------');
    // console.log('distance between rhythms: ', distanceToNextNote)
    // console.log('target: ', desiredTarget);
    // console.log('input: ', inputTick);
    // console.log('next target: ', nextTargetTick);
    // console.log('how close: ', difference);
  }

  function changeRhythm(newArray) {
    targetRhythmArray = newArray;
    dispatch(updateRhythm(targetRhythmArray));
  }

  // User Input / Controls
  window.addEventListener("keydown", event => {
    if (event.keyCode === 83) {
      if (listening) {
        compareTime();
      }
      playUserSound();
    }
  });

  function playUserSound() {
    snarePlayer.start();
  }

  function toggleTransport() {
    if (transportOn) {
      console.log('stopping');
      transportOn = false;
      Tone.Transport.stop();
    } else {
      console.log('starting');
      counter = 1;
      transportOn = true;
      Tone.Transport.start();
    }
  }

  function startTransport() {
    if (!transportOn) {
      counter = 1;
      looper.start(0);
      Tone.Transport.start();
      transportOn = true
    };
  }
  function stopTransport() {
    if (transportOn) {
      Tone.Transport.stop();
      dispatch(metronomeSwitch(false));
      transportOn = false
    };
  }
  return (
    <div>
      <UI onStartTransport={startTransport} onStopTransport={stopTransport} onCompareTime={compareTime} onPlayUserSound={playUserSound} onChangeRhythm={changeRhythm} />
      <h2>ToneTest.js loaded</h2>
      <h3>Press any key to log time in ticks and play a sound</h3>
      <h3>Check console log to see current ticks of keypress / effect of Start/Stop button</h3>
      <button onClick={toggleTransport}>Start/Stop</button>
      <button onClick={() => (changeRhythm([1, 2, 3]))}>Temp updater</button>
    </div>
  )
}

export default ToneTest;
