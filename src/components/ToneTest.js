import React from 'react';
import * as Tone from 'tone';

function ToneTest(){
    let kick;
    let looper;
    // let light = false;
        // kick.triggerAttackRelease(50, '8n', time);

    


    kick = new Tone.MembraneSynth().toMaster();
    looper = new Tone.Loop(song, '16n');

    Tone.Transport.start();

    looper.start(0);

    Tone.context.lookAhead = 0
    
    function song(time){
        // console.log(Tone.Transport.ticks);
        // if (Tone.Transport.position === ) 
    }

    function getTime(time){
        console.log('time: ', Tone.Transport.getTicksAtTime());
 kick.triggerAttackRelease(50, '8n', time);
    }

    window.addEventListener('keydown', event => {
        getTime()
    })

    return(
        <div>
        <button onClick={() => getTime()}>TIME</button>
        <h2>Hi</h2>
        </div>
    )
}

export default ToneTest;