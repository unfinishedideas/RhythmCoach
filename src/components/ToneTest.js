import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';
import snareSample from './../audio/snare.ogg';
import hatSample from './../audio/hat.ogg';

function ToneTest() {
    // Initializing ====================================================================================================
    let transportOn = false;

    function setListen(listeningToUser){
        if (listeningToUser === true) {
            Tone.context.latencyHint = 'fastest';
            console.log('Current latency mode:', Tone.context.latencyHint);
        } else {
            Tone.context.latencyHint = 'interactive';
            console.log('Current latency mode:', Tone.context.latencyHint);
        }
    };

    // Load Samples
    let kickBuffer = new Tone.Buffer(kickSample);
    let snareBuffer = new Tone.Buffer(snareSample);
    let hatBuffer = new Tone.Buffer(hatSample);

    let kickPlayer = new Tone.Player(kickBuffer, function () { console.log('kick sample initialized'); }).toMaster();
    let snarePlayer = new Tone.Player(snareBuffer, function () { console.log('snare sample initialized'); }).toMaster();
    let hatPlayer = new Tone.Player(hatBuffer, function () { console.log('hat sample initialized'); }).toMaster();


    // Playback ========================================================================================================
    Tone.Buffer.on('load',
        function onLoad(){
            console.log('All samples loaded');
            setListen(true);
           
            Tone.Transport.bpm.value = 100;
            Tone.Transport.loopStart = 0;
            Tone.Transport.loopEnd = '4m'
            Tone.Transport.loop = true;
            // Tone.Transport.start();
           
            let looper = new Tone.Loop(song, '16n');
            looper.start(0);
        },
        function onError(){
            console.log("Something didn't load properly");
        }
    );

    let targetTick = 0;
    let counter = 1;
    let firstTick = null;
    let secondTick = null;
    let sixteenthSpacing = null;
    let nextTargetNote = null;

    function song() {
        // Rhythm Key
        // 1  e  +  a     2  e  +  a     3  e  +  a     4  e  +  a  
        // 1  2  3  4     5  6  7  8     9  10 11 12    13 14 15 16
        const hatRhythmArray = [1,3,5,7,9,11,13,15];
        const snareRhythmArray = [5,13];
        const kickRhythmArray = [1,3,0,9,10,12];
        const targetRhythmArray = [5, 8, 13];

        // NOTE!!! Sometimes the difference is yuuuge. Possibly due to the loop not resetting targetTick
        // Note pt2. Also: If you are early for a note it is a large diff because it compares to the last note
        // and not the nearest one.

        // Set the ticks for the target note
        if (targetRhythmArray.includes(counter)){
            targetTick = Tone.Transport.getTicksAtTime();
            
            let nextIndex = targetRhythmArray.indexOf((counter)) + 1;
            if ((nextIndex + 1) > targetRhythmArray.length){
                nextIndex = 0;
            }
            nextTargetNote = targetRhythmArray[nextIndex];
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


        // Calculate the distance between ticks. 16th spacing
        if (counter === 1){
            firstTick = Tone.Transport.getTicksAtTime();
        } else if (counter === 2){
            secondTick = Tone.Transport.getTicksAtTime();
        }
        if (secondTick != null && counter !== 1) {
            sixteenthSpacing = secondTick - firstTick;
        }


        // Reset Counter on beat 1
        if (counter < 16) {
            counter += 1
        }
        else {
            counter = 1;
        }
    }
    
    function playSnare() {
        snarePlayer.start();
    }
    
    window.addEventListener('keydown', event => {
        compareTime();
        playSnare();
    })
    
    function toggleTransport() {
        if (transportOn) {
            console.log('stopping');
            Tone.Transport.stop();
            transportOn = false;
        } else {
            console.log('starting');
            Tone.Transport.start();
            transportOn = true;
            counter = 1;
        }
    }
    
    // Game stuff ======================================================================================================
    // This doesn't work right because you are calculating between 16th notes. Not the rhythm.
    function compareTime() {
        let desiredTarget = targetTick;
        let inputTick = Tone.Transport.getTicksAtTime()
        let distanceToNextNote = null;
        
        // Calculates Distance to Next Note


        // If inputTick > 1/2 distanceToNextNote desiredTarget = nextNote


        // Compares how close to the nearest 16th you inputted....(do you need this?)


        // Old!
        // if ((inputTick - targetTick) > (sixteenthSpacing / 2)){
        //     desiredTarget = targetTick + sixteenthSpacing
        // }
            
        console.log('----------------------------');
        console.log('target: ', desiredTarget);
        console.log('input:', inputTick);
        console.log('sixteenthSpacing: ', inputTick - desiredTarget);
    }



    return (
        <div>
            <h2>ToneTest.js loaded</h2>
            <h3>Press any key to log time in ticks and play a sound</h3>
            <h3>Check console log to see current ticks of keypress / effect of Start/Stop button</h3>
            <button onClick={toggleTransport}>Start/Stop</button>
            <br/>
            <button onClick={() => setListen(true)}>Fastest Latency</button>
            <button onClick={() => playSnare()}>CLICK</button>
            <br/>
            <button onClick={() => setListen(false)}>Playback Latency (stops sound)</button>
        </div>
    )
}

export default ToneTest;
