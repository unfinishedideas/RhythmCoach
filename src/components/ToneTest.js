import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';


function ToneTest() {
    // Initializing ====================================================================================================
    let transportOn = true;

    function setListen(listeningToUser){
        if (listeningToUser === true) {
            Tone.context.latencyHint = 'fastest';
            console.log('Current latency mode:', Tone.context.latencyHint);
        } else {
            Tone.context.latencyHint = 'playback';
            console.log('Current latency mode:', Tone.context.latencyHint);
        }
    }

    setListen(false);
    
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
    

    // Playback ========================================================================================================
    Tone.Transport.start();
    let looper = new Tone.Loop(song, '16n');
    looper.start(0);

    function song(time) {
        console.log(Tone.Transport.ticks);
    }

    function getTime() {
        console.log('time: ', Tone.Transport.getTicksAtTime());
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
            <h2>ToneTest loaded: Press any key to log time in ticks and play sound</h2>
            <button onClick={toggleTransport}>Start/Stop</button>
            <button onClick={() =>setListen(true)}>Allow listening</button>
            <button onClick={() => setListen(false)}>No listening</button>
        </div>
    )
}

export default ToneTest;
