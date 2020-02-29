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
            setListen(false);
            Tone.Transport.start();
            let looper = new Tone.Loop(song, '4n');
            looper.start(0);
        },
        function onError(){
            console.log("Something didn't load properly");
        }
    );
    
    let counter = 1;
    let currentBeatTick = 0;
    function song(time) {
        // console.log(Tone.Transport.ticks);
        // console.log(counter);
        kickPlayer.start();
        currentBeatTick = Tone.Transport.getTicksAtTime();
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
            <br/>
            <button onClick={() => setListen(false)}>Playback Latency (stops sound)</button>
        </div>
    )
}

export default ToneTest;
