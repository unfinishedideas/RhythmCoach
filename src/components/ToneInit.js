import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';
import snareSample from './../audio/snare.ogg';
import hatSample from './../audio/hat.ogg';
import PropTypes from 'prop-types';

function ToneInit (props) {
    let looper = new Tone.Loop(song, '16n');

    let kickBuffer = new Tone.Buffer(kickSample);
    let snareBuffer = new Tone.Buffer(snareSample);
    let hatBuffer = new Tone.Buffer(hatSample);

    let kickPlayer = new Tone.Player(kickBuffer, function () { console.log('kick sample initialized'); }).toMaster();
    let snarePlayer = new Tone.Player(snareBuffer, function () { console.log('snare sample initialized'); }).toMaster();
    let hatPlayer = new Tone.Player(hatBuffer, function () { console.log('hat sample initialized'); }).toMaster();

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
    let targetTick = 0;
    let counter = 1;
    let firstTick = null;
    let secondTick = null;
    let sixteenthSpacing = null;
    let nextTargetTick = null;
    let aboutToLoop = false;
    let remainingTicks = 0;

    function song() {
        // Rhythm Key
        // 1  e  +  a     2  e  +  a     3  e  +  a     4  e  +  a  
        // 1  2  3  4     5  6  7  8     9  10 11 12    13 14 15 16
        const hatRhythmArray = [1, 3, 5, 7, 9, 11, 13, 15];
        const snareRhythmArray = [5, 13];
        const kickRhythmArray = [1, 3, 0, 9, 10, 12];
        const targetRhythmArray = [5, 13];
        // const targetRhythmArray = [1, 3, 5, 7, 9, 11, 13, 15];
        // const targetRhythmArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        // const targetRhythmArray = [1,3,4,5,7,11,13]

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
        // If the transport is about to loop get a more accurate reading of the target ticks coming up. .position[0] changes based on # of measures.
        if (Tone.Transport.position[0] === '1' && Tone.Transport.position[2] === '3' && Tone.Transport.position[4] === '3') {
            aboutToLoop = true;
        }
        if (aboutToLoop === true) {
            remainingTicks = (sixteenthSpacing * 16) - (sixteenthSpacing * targetRhythmArray[targetRhythmArray.length - 1])
            nextTargetTick = (targetRhythmArray[0] * sixteenthSpacing) - sixteenthSpacing;
            distanceToNextNote = nextTargetTick + remainingTicks;
            targetTick =  remainingTicks * -1;

            aboutToLoop = false;
            console.log('%%%%%%%%');
            console.log('loop!');
            console.log('%%%%%%%%');
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
            counter += 1
        }
        else {
            counter = 1;
        }
    }

    return(
        <div></div>
    )


}

export default ToneInit;