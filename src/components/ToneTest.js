import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';


function ToneTest() {
    // Initializing ====================================================================================================

    // Tone settings
    Tone.context.lookAhead = 0

    // Transport stuff
    let looper = new Tone.Loop(song, '16n');
    Tone.Transport.start();
    looper.start(0);

    // Loading Kick Sample into buffer. Old way.
    // var kickBuffer = new Tone.Buffer(
    //     kickSample,
    //     function () { console.log('kick buffer loaded') },
    //     function () { console.log('kick buffer failed to load') }
    // )
    // let kickPlayer = new Tone.Player(kickBuffer, function () { console.log('kick sample initialized'); }).toMaster();

    // Loading Kick Sample into Tone Player directly. No error catch though? This is just as low latency it looks like:
    let kickPlayer = new Tone.Player(kickSample, function () { console.log('kick sample initialized'); }).toMaster();
   
    // Synth Kick Stuff
    // let kick = new Tone.MembraneSynth().toMaster();
    

    // Playback ========================================================================================================

    // This is the function called every 16th note by looper
    function song(time) {
        // console.log(Tone.Transport.ticks);
        // kick.triggerAttackRelease(50, '8n', time);
    }

    // This gets the time in ticks from start and plays sample
    function getTime() {
        console.log('time: ', Tone.Transport.getTicksAtTime());
        // kick.triggerAttackRelease(50, '8n', "+0.0025");
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