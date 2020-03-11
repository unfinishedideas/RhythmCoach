import React from 'react';
import PropTypes from 'prop-types'


function Transport(props) {
    const compareTime = () => {
        props.onPlayUserSound()
        props.onCompareTime();
    }
    const startTransport = () => {
        props.onStartTransport();
    }
    const stopTransport = () => {
        props.onStopTransport();
    }

    return (
        <div style={styles.transportStyle}>
            <button style={styles.btnStyle} onMouseDown={compareTime}>Tap</button>
            <button style={styles.btnStyle} onMouseDown={startTransport}>Start</button>
            <button style={styles.btnStyle} onMouseDown={stopTransport}>Stop</button>
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

Transport.propTypes = {
    onStartTransport: PropTypes.func,
    onStopTransport: PropTypes.func,
    onCompareTime: PropTypes.func,
    onPlayUserSound: PropTypes.func
}

export default Transport;