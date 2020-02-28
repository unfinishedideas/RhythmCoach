import React from 'react';
import * as Tone from 'tone';
import kickSample from './../audio/kick.ogg';

// var kickBuffer = new Tone.Buffer(
//     "kick_copy.ogg", 
//     function(){console.log('kick buffer loaded')},
//     function(){console.log('kick buffer failed to load')}
// )

let kickPlayer = new Tone.Player(kickSample,function(){console.log('kick sample initialized');}).toMaster();

function ToneTest(){
    let looper;
    
    // let kick;
    // let light = false;
    // kick.triggerAttackRelease(50, '8n', time);
    // kick = new Tone.MembraneSynth().toMaster();
   
    
    Tone.context.lookAhead = 0
    
    looper = new Tone.Loop(song, '16n');
    Tone.Transport.start();
    looper.start(0);

    function song(time){
        // console.log(Tone.Transport.ticks);
        // if (Tone.Transport.position === ) 
    }

    function getTime(){
        console.log('time: ', Tone.Transport.getTicksAtTime());
        // kick.triggerAttackRelease(50, '8n', "+0.0025");
        kickPlayer.start()
    }

    window.addEventListener('keydown', event => {
        getTime()
    })

    return(
        <div>
        <h2>ToneTest loaded: Press any key to log time in ticks and play sound</h2>
        </div>
    )
}

export default ToneTest;