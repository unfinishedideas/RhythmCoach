import React from 'react';
import GridDisplay from "./../GridDisplay";
import Counter from './Counter'

function RhythmDisplay() {
    return (
        <div style={rhythmComponentStyle}>
            <p>RhythmDisplay</p>
            <div style={rhythmDisplayStyle}>
                <Counter />
                <GridDisplay />
            </div>
        </div>
    )
}

const rhythmComponentStyle = {
    width: '100%',
    justifySelf: 'center',
    alignSelf: 'end',
    gridColumn: '1/3'
}

const rhythmDisplayStyle = {
    // border: '1px solid red',
    // overflow: 'auto',
    // width: '100%',
    padding: '1rem',
    background: 'rgb(25,25,25)',
    display: 'flex',
    border: '2px solid rgb(150,150,150)'
}

export default RhythmDisplay;