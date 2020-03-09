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
    height: '148px',
    width: '148px',
    margin: '0 1em',
    fontSize: '24px'
}
const tapButtonStyle = {
    height: '148px',
    width: '148px',
    margin: '0 1em',
    fontSize: '24px'
}
const stopButtonStyle = {
    height: '148px',
    width: '148px',
    margin: '0 1em',
    fontSize: '24px'
}

export default Transport;