import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';
import snareSample from './../audio/snare.ogg';
import hatSample from './../audio/hat.ogg';

function ToneTest() {
    // Initializing ====================================================================================================
    let transportOn = true;

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
            Tone.Transport.start();
           
            let looper = new Tone.Loop(song, '16n');
            looper.start(0);
        },
        function onError(){
            console.log("Something didn't load properly");
        }
    );

    let currentBeatTick = 0;
    let counter = 0;
    // Rhythm Key
    // 1  e  +  a     2  e  +  a     3  e  +  a     4  e  +  a  
    // 1  2  3  4     5  6  7  8     9  10 11 12    13 14 15 16
    
    function song(time) {
        // console.log(Tone.Transport.ticks);
        // console.log(counter);

        // Snares
        if (counter === 5 || counter === 13){
            snarePlayer.start();
            currentBeatTick = Tone.Transport.getTicksAtTime();
        }
        // Hats
        if (counter %2 !== 0) {
            hatPlayer.start();
        }
        // Kicks
        const kickRhythmArray = [1,3,0,9,10,12];
        if (kickRhythmArray.includes(counter) ) {
            kickPlayer.start();
        }
        if (counter < 16) {
            counter += 1
        }
        else {
            counter = 1;
        }
    }

    function displayTime(string) {
        console.log(`time of ${string}:`, Tone.Transport.getTicksAtTime());
    }

    function playSnare() {
        // displayTime('input');
        compareTime(Tone.Transport.getTicksAtTime());
        snarePlayer.start();
    }

    window.addEventListener('keydown', event => {
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
    function compareTime(inputTick) {
        console.log('----------------------------');
        console.log('target: ', currentBeatTick);
        console.log('input:', inputTick);
        console.log('difference: ', inputTick - currentBeatTick);

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
