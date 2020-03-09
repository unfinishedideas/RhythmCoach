import React from 'react';

function Transport() {
    return (
        <div style={transportStyle}>
            <button style={tapButtonStyle}>Tap</button>
            <button style={startButtonStyle}>Start</button>
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

const tapButtonStyle = {
    height: '148px',
    width: '148px',
    // height: '10rem',
    // width: '10rem',
    margin: '0 1em',
    fontSize: '24px'
}
const startButtonStyle = {
    height: '148px',
    width: '148px',
    // height: '10rem',
    // width: '10rem',
    margin: '0 1em',
    fontSize: '24px'
}
const stopButtonStyle = {
    height: '148px',
    width: '148px',
    // height: '10rem',
    // width: '10rem',
    margin: '0 1em',
    fontSize: '24px'
}

export default Transport;