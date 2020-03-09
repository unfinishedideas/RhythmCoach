import React from 'react';

function Transport() {
    return (
        <div style={transportStyle}>
            <button style={startButtonStyle}>Start</button>
            <button style={tapButtonStyle}>Tap</button>
            <button style={stopButtonStyle}>Stop</button>
        </div>
    )
}
const transportStyle = {
    justifySelf: 'center',
    alignSelf: 'end',
    gridColumn: '1/4',
    margin: '1rem',
}

const startButtonStyle = {
    height: '150px',
    width: '150px',
    margin: '0 1em'
}
const tapButtonStyle = {
    height: '150px',
    width: '150px',
    margin: '0 1em'
}
const stopButtonStyle = {
    height: '150px',
    width: '150px',
    margin: '0 1em'
}

export default Transport;