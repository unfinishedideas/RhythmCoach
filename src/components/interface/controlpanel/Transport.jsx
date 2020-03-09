import React from 'react';

function Transport() {
    return (
        <div>
            <button style={startButtonStyle}>Start</button>
            <button style={tapButtonStyle}>Tap</button>
            <button style={stopButtonStyle}>Stop</button>
        </div>
    )
}

const startButtonStyle = {
    height: '150px',
    width: '150px'
}
const tapButtonStyle = {
    height: '150px',
    width: '150px'

}
const stopButtonStyle = {
    height: '150px',
    width: '150px'

}

export default Transport;