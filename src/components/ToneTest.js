import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';


function ToneTest() {
    // Initializing ====================================================================================================
    let kickBuffer;
    let kickPlayer;
    
    function checkListen(listeningToUser){
        if (listeningToUser === true) {
            Tone.context.latencyHint = 'fastest';
            console.log('Current latency mode:', Tone.context.latencyHint);
        } else {
            Tone.context.latencyHint = 'playback';
            console.log('Current latency mode:', Tone.context.latencyHint);
        }
    }

    checkListen(false);
    
    // Sampler Set up
    kickBuffer = new Tone.Buffer
    (
        kickSample,
        function () { 
            console.log('kick buffer loaded')},
        function () { 
            console.log('kick buffer failed to load');}
    )
    kickPlayer = new Tone.Player(kickBuffer, function () { console.log('kick sample initialized'); }).toMaster();
    

    // Playback ========================================================================================================
    Tone.Transport.start();
    let looper = new Tone.Loop(song, '16n');
    looper.start(0);


    // This is the function called every 16th note by looper
    function song(time) {
        console.log(Tone.Transport.ticks);
    }

    // This gets the time in ticks from start and plays sample
    function getTime() {
        console.log('time: ', Tone.Transport.getTicksAtTime());
        kickPlayer.start()
    }

    window.addEventListener('keydown', event => {
        getTime()
    })

    return (
        <div>
            <h2>ToneTest loaded: Press any key to log time in ticks and play sound</h2>
        </div>
    )
}

export default ToneTest;