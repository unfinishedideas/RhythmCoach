import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as Tone from 'tone';

import snareSample from './../audio/snare.ogg';
import ToneInit from './ToneInit';
import UI from './UI';

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

    let targetTick = 0;
    let counter = 1;
    let nextTargetTick = null;
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
            <UI />
        </div>
    )
}

export default GameLogic;
