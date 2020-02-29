import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';
import snareSample from './../audio/snare.ogg';
import hatSample from './../audio/hat.ogg';

function ToneTest() {
    // Initializing ====================================================================================================
    let transportOn = true;

    // function setListen(listeningToUser){
    //     if (listeningToUser === true) {
            // Tone.context.latencyHint = 'fastest';
    //         console.log('Current latency mode:', Tone.context.latencyHint);
    //     } else {
            // Tone.context.latencyHint = 'playback';
    //         console.log('Current latency mode:', Tone.context.latencyHint);
    //     }
    // }

    // setListen(false);
    // Sampler Set up
    let kickBuffer = new Tone.Buffer
    (
        kickSample,
        function () { 
            console.log('kick buffer loaded');},
        function () { 
            console.log('kick buffer failed to load');}
    )
    let kickPlayer = new Tone.Player(kickBuffer, function () { console.log('kick sample initialized'); }).toMaster();    
    
    let snareBuffer = new Tone.Buffer
    (
        snareSample,
        function () { 
            console.log('snare buffer loaded');},
        function () { 
            console.log('snare buffer failed to load');}
    )
    let snarePlayer = new Tone.Player(snareBuffer, function () { console.log('snare sample initialized'); }).toMaster();
    
    let hatBuffer = new Tone.Buffer
    (
        hatSample,
        function () { 
            console.log('hat buffer loaded');},
        function () { 
            console.log('hat buffer failed to load');}
    )
    let hatPlayer = new Tone.Player(hatBuffer, function () { console.log('hat sample initialized'); }).toMaster();
    

    // Playback ========================================================================================================
    let counter = 1;
    Tone.Transport.start();
    let looper = new Tone.Loop(song, '16n');
    looper.start(0);

    function song(time) {
        // console.log(Tone.Transport.ticks);
        // console.log(counter);
        hatPlayer.start();
        if (counter === 5 || counter === 13) {
            snarePlayer.start();
        }
        if (counter === 1 || counter === 5 || counter === 9 || counter === 13){
            kickPlayer.start();
        }
        counter += 1;
        if (counter > 16) {
            counter = 1;
        }
    }
    function getTime() {
        // console.log('time: ', Tone.Transport.getTicksAtTime());
        kickPlayer.start();
    }

    window.addEventListener('keydown', event => {
         getTime();
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

    return (
        <div>
            <h2>ToneTest.js loaded</h2>
            <h3>Press any key to log time in ticks and play a sound</h3>
            <h3>Check console log to see current ticks of keypress / effect of Start/Stop button</h3>
            <button onClick={toggleTransport}>Start/Stop</button>
            {/* <br/>
            <button onClick={() => setListen(true)}>Fastest Latency</button>
            <br/>
            <button onClick={() => setListen(false)}>Playback Latency (stops sound)</button> */}
        </div>
    )
}

export default ToneTest;
