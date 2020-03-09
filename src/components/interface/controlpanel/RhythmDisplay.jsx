import React from 'react';
import GridDisplay from "./../GridDisplay";
import Counter from './Counter'

function RhythmDisplay() {
    return (
        <div style={rhythmComponentStyle}>
            <p style={rhythmTitleStyle}>Rhythm Display</p>
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
    gridColumn: '1/4',
    background: 'rgb(25,25,25)',
    border: '2px solid rgb(150,150,150)',
    // textAlign: 'center'
}

const rhythmTitleStyle = {
    color: 'red',
    margin: '0 2rem'
}

const rhythmDisplayStyle = {
    // border: '1px solid red',
    // overflow: 'auto',
    // width: '100%',
    padding: '1rem',
    display: 'flex',
}

export default RhythmDisplay;