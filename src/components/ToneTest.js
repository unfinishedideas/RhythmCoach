import React from 'react';
import * as Tone from 'tone';

function ToneTest(){
    let kick;
    let looper;

    kick = new Tone.MembraneSynth().toMaster();
    looper = new Tone.Loop(song, '4n');

    Tone.Transport.start();

    looper.start(0);

    function song(time){
        // kick.triggerAttackRelease(50, '8n', time);
        console.log(Tone.Transport.ticks);
    }

    function getTime(){
        console.log('time: ', Tone.Transport.getTicksAtTime());
    }


    return(
        <div>
        <button onClick={() => getTime()}>TIME</button>
        <h2>Hi</h2>
        </div>
    )
}

export default ToneTest;