import React from 'react';
import * as Tone from 'tone';

function ToneTest(){
    let looper;
    
    // let kick;
    // let light = false;
    // kick.triggerAttackRelease(50, '8n', time);
    // kick = new Tone.MembraneSynth().toMaster();
   

    let kickBuffer = new Tone.Buffer('./../audio/kick.ogg', function(){
        console.log('kick buffer loaded');
    })

    let kickSample = new Tone.Player(kickBuffer, function(){
        console.log('kick sample init');
    }).toMaster();
    
    // Tone.context.lookAhead = 0
    
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
        kickSample.start()
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