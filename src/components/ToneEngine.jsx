import React from "react";
import * as Tone from "tone";
import kickSample from "./../audio/kick.ogg";
import snareSample from "./../audio/snare.ogg";
import hatSample from "./../audio/hat.ogg";
import { useDispatch } from "react-redux";
import { changeCurrentTarget, updateTargetDistance } from "./../actions";

import UI from "./interface/UI";

function ToneTest() {
  // Initializing ====================================================================================================
  let transportOn = false;
  let looper = new Tone.Loop(song, "16n");
  const dispatch = useDispatch();
  let listening = true;

  // Load Samples
  let kickBuffer = new Tone.Buffer(kickSample);
  let snareBuffer = new Tone.Buffer(snareSample);
  let newSnareBuffer = new Tone.Buffer(snareSample);
  let hatBuffer = new Tone.Buffer(hatSample);

  let kickPlayer = new Tone.Player(kickBuffer, function() {
    console.log("kick sample initialized");
  }).toMaster();
  let snarePlayer = new Tone.Player(snareBuffer, function() {
    console.log("snare sample initialized");
  }).toMaster();
  let newSnarePlayer = new Tone.Player(newSnareBuffer, function() {
    console.log("snare sample initialized");
  }).toMaster();
  let hatPlayer = new Tone.Player(hatBuffer, function() {
    console.log("hat sample initialized");
  }).toMaster();

  // Playback ========================================================================================================
  Tone.Buffer.on(
    "load",
    function onLoad() {
      console.log("All samples loaded");
      Tone.context.latencyHint = "fastest";
      Tone.Transport.bpm.value = 100;
      Tone.Transport.loopStart = 0;
      Tone.Transport.loopEnd = "2m";
      Tone.Transport.loop = true;

      looper.start(0);
    },
    function onError() {
      console.log("Something didn't load properly");
    }
  );

  // Variables for song()
  let targetTick = 0;
  let counter = 1;
  let firstTick = null;
  let secondTick = null;
  let sixteenthSpacing = null;
  let nextTargetTick = null;
  let aboutToLoop = false;
  let remainingTicks = 0;
  let distanceToNextNote = 0;
  const targetRhythmArray = [5, 10];

  function song() {
    // Rhythm Key
    // 1  e  +  a     2  e  +  a     3  e  +  a     4  e  +  a
    // 1  2  3  4     5  6  7  8     9  10 11 12    13 14 15 16
    const hatRhythmArray = [1, 3, 5, 7, 9, 11, 13, 15];
    const snareRhythmArray = [5, 13];
    const kickRhythmArray = [1, 3, 0, 9, 10, 12];

    // Calculate the distance between ticks. 16th spacing
    if (counter === 1) {
      firstTick = Tone.Transport.getTicksAtTime();
    } else if (counter === 2) {
      secondTick = Tone.Transport.getTicksAtTime();
    }
    if (secondTick !== null && counter !== 1) {
      sixteenthSpacing = secondTick - firstTick;
    }

    // Set the ticks for the target note
    // Check for loops with .position[#]. That position[0] value on 'about to loop' should change based on # of measures.
    console.log(Tone.Transport.position);
    if (
      Tone.Transport.position[0] === "0" &&
      Tone.Transport.position[2] === "0" &&
      Tone.Transport.position[4] === "0"
    ) {
      aboutToLoop = false;
      console.log("%%%%%%%%");
      console.log("done loop");
      console.log("%%%%%%%%");
    }

    if (
      Tone.Transport.position[0] === "1" &&
      Tone.Transport.position[2] === "0" &&
      Tone.Transport.position[4] === "0"
    ) {
      aboutToLoop = true;
      console.log("about to loop");
    }
    if (
      aboutToLoop === true &&
      targetRhythmArray.indexOf(counter) + 2 > targetRhythmArray.length
    ) {
      let totalTicks = sixteenthSpacing * 15;

      // Gets the distance between the last 16th note and 0
      remainingTicks =
        totalTicks -
        sixteenthSpacing * targetRhythmArray[targetRhythmArray.length - 1];

      nextTargetTick =
        targetRhythmArray[0] * sixteenthSpacing - sixteenthSpacing;

      distanceToNextNote = nextTargetTick + remainingTicks;
      targetTick = remainingTicks * -1;

      //   dispatch(changeCurrentTarget(remainingTicks));
      //   dispatch(updateTargetDistance(distanceToNextNote));

      console.log("calculating new targets!");
      console.log("currentTarget:", targetTick);
      // console.log('remainingTicks', remainingTicks);
      console.log("next target tick:", nextTargetTick);
      // console.log('distance to next: ', distanceToNextNote);
    } else if (targetRhythmArray.includes(counter)) {
      targetTick = Tone.Transport.getTicksAtTime();

      let nextIndex = targetRhythmArray.indexOf(counter) + 1;

      // If the next index is larger than the array it must be index 0
      if (nextIndex + 1 > targetRhythmArray.length) {
        nextIndex = 0;
      }
      // Get the value in ticks for the next target note
      nextTargetTick =
        firstTick +
        targetRhythmArray[nextIndex] * sixteenthSpacing -
        sixteenthSpacing;

      // Calculate the distance to the next note
      distanceToNextNote = nextTargetTick - targetTick;

      // Add a measure of 16th notes to the count if it's a new measure
      if (nextIndex === 0) {
        nextTargetTick += +(sixteenthSpacing * 16);
      }
    }

    // Backing track playback
    // Hats
    if (hatRhythmArray.includes(counter)) {
      hatPlayer.start();
    }
    // Snares
    if (snareRhythmArray.includes(counter)) {
      snarePlayer.start();
    }
    // Kicks
    if (kickRhythmArray.includes(counter)) {
      kickPlayer.start();
    }

    // Reset Counter on beat 1
    if (counter < 16) {
      counter += 1;
    } else {
      counter = 1;
    }
  }

  window.addEventListener("keydown", event => {
    if (listening) {
      compareTime();
    }
    newSnarePlayer.start();
  });

  function toggleTransport() {
    if (transportOn) {
      console.log("stopping");
      Tone.Transport.stop();
      transportOn = false;
    } else {
      console.log("starting");
      Tone.Transport.start();
      transportOn = true;
      counter = 1;
    }
  }

  // Game stuff ======================================================================================================
  // THIS HAS ISSUES! It's setting the new target too soon (might be up top too in about to loop section)
  function compareTime() {
    // Target is currently wrong on loop
    let desiredTarget = targetTick;
    let inputTick = Tone.Transport.getTicksAtTime();

    if (
      aboutToLoop === true &&
      targetRhythmArray.indexOf(counter) + 2 > targetRhythmArray.length
    ) {
      console.log("hi");
      let totalTicks = sixteenthSpacing * 15;
      inputTick = (totalTicks - inputTick) * -1;
    }

    let difference = inputTick - desiredTarget;

    if (difference > distanceToNextNote / 2) {
      desiredTarget = nextTargetTick;
    }

    console.log("----------------------------");
    // console.log('distance between rhythms: ', distanceToNextNote)
    console.log("target: ", desiredTarget);
    console.log("input: ", inputTick);
    // console.log('next target: ', nextTargetTick);
    console.log("how close: ", inputTick - desiredTarget);
  }

  return (
    <div>
      <h2>ToneTest.js loaded</h2>
      <h3>Press any key to log time in ticks and play a sound</h3>
      <h3>
        Check console log to see current ticks of keypress / effect of
        Start/Stop button
      </h3>
      <button onClick={toggleTransport}>Start/Stop</button>
      <br />
      <button onClick={() => (listening = true)}>Listening</button>
      <br />
      <button onClick={() => (listening = false)}>Playback</button>
      <UI toggleTransport={toggleTransport} />
    </div>
  );
}

export default ToneTest;
