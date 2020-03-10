import React from 'react';

function Transport() {
    return (
        <div style={styles.transportStyle}>
            <button style={styles.tapButtonStyle}>Tap</button>
            <button style={styles.startButtonStyle}>Start</button>
            <button style={styles.stopButtonStyle}>Stop</button>
        </div>
    )
}

const styles = {
    transportStyle: {
        justifySelf: 'center',
        alignSelf: 'end',
        gridColumn: '1/3',
        margin: '1rem',
    },
    tapButtonStyle: {
        height: '9rem',
        width: '9rem',
        margin: '0 1rem',
        fontSize: '1.5rem'
    },
    startButtonStyle: {
        height: '9rem',
        width: '9rem',
        margin: '0 1rem',
        fontSize: '1.5rem'
    },
    stopButtonStyle: {
        height: '9rem',
        width: '9rem',
        margin: '0 1rem',
        fontSize: '1.5rem'
    }
}

export default Transport;