import React from 'react';

function Transport() {
    return (
        <div style={styles.transportStyle}>
            <button style={styles.btnStyle}>Tap</button>
            <button style={styles.btnStyle}>Start</button>
            <button style={styles.btnStyle}>Stop</button>
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
    btnStyle: {
        height: '9rem',
        width: '9rem',
        margin: '0 1rem',
        fontSize: '1.5rem',
        borderRadius: '20px',
        boxShadow: '3px 3px black'
    },
}

export default Transport;