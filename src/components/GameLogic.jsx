import React, { useState } from 'react';
import * as Tone from 'tone';

// import kickSample from './../audio/kick.ogg';
import snareSample from './../audio/snare.ogg';
// import hatSample from './../audio/hat.ogg';

import GridDisplay from './GridDisplay';

import ToneInit from './ToneInit'


function GameLogic(props) {
    // Initializing ====================================================================================================
    // let transportOn = false;
    // let looper = new Tone.Loop(song, '16n');

    let snareBuffer = new Tone.Buffer(snareSample);
    let snarePlayer = new Tone.Player(snareBuffer, function () { console.log('snare sample initialized'); }).toMaster();

    let transportOn = false;
    function setListen(listeningToUser) {
        if (listeningToUser === true) {
            Tone.context.latencyHint = 'fastest';
            console.log('Current latency mode:', Tone.context.latencyHint);
        } else {
            Tone.context.latencyHint = 'interactive';
            console.log('Current latency mode:', Tone.context.latencyHint);
        }
    };

    // Updating Display Logic
    const gridBoxes = [
        {isOn: false, id: 1},
        {isOn: false, id: 2},
        {isOn: false, id: 3},
        {isOn: false, id: 4},
        {isOn: false, id: 5},
        {isOn: false, id: 6},
        {isOn: false, id: 7},
        {isOn: false, id: 8},
        {isOn: false, id: 9},
        {isOn: false, id: 10},
        {isOn: false, id: 11},
        {isOn: false, id: 12},
        {isOn: false, id: 13},
        {isOn: false, id: 14},
        {isOn: false, id: 15},
        {isOn: false, id: 16}
    ]
    const [boxes, updateBoxes] = useState(gridBoxes)

    const toggleBox = (id) => {
        let updatedBoxes = boxes.map(b => {
            if (b.id === id) b.isOn = !b.isOn;
            return b;
        });
        updateBoxes(updatedBoxes);
    }

    let targetTick = 0;
    let counter = 1;
    // let firstTick = null;
    // let secondTick = null;
    // let sixteenthSpacing = null;
    let nextTargetTick = null;
    // let aboutToLoop = false;
    // let remainingTicks = 0;
    let distanceToNextNote = 0;

    window.addEventListener('keydown', event => {
        compareTime();
        snarePlayer.start();
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
            counter = 1;
        }
    }

    // Game stuff ======================================================================================================

    function compareTime() {
        // Target is currently wrong on loop
        let desiredTarget = targetTick;
        let inputTick = Tone.Transport.getTicksAtTime();

        let difference = inputTick - desiredTarget;
    
        if (difference > (distanceToNextNote / 2)) {
            desiredTarget = nextTargetTick;
        };

        console.log('----------------------------');
        // console.log('distance between rhythms: ', distanceToNextNote)
        console.log('target: ', desiredTarget);
        console.log('input: ', inputTick);
        // console.log('next target: ', nextTargetTick);
        console.log('how close: ', inputTick - desiredTarget);
    }

    return (
        <div>
            <ToneInit/>
            <h2>GameLogic.js loaded</h2>
            <h3>Press any key to log time in ticks and play a sound</h3>
            <h3>Check console log to see current ticks of keypress / effect of Start/Stop button</h3>
            <button onClick={toggleTransport}>Start/Stop</button>
            <br />
            <button onClick={() => setListen(true)}>Fastest Latency</button>
            <br />
            <button onClick={() => setListen(false)}>Playback Latency (stops sound)</button>
            <GridDisplay boxes={boxes} toggleBox={toggleBox}/>
        </div>
    )
}

export default GameLogic;
