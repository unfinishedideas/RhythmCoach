import React from 'react';
import * as Tone from 'tone';

function ToneTest(){
//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster()

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease('C4', '8n')

    return(
        <div>
        <h2>Hi</h2>
        </div>
    )
}

export default ToneTest;