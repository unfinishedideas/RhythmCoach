import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const TransportComponent = styled.div`
justify-self: center;
align-self: center;
grid-column: 1/3;
margin: 1rem;

@media (max-width: 915px) {
    
  }
`;


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
        <TransportComponent>
            <button style={styles.btnStyle} onMouseDown={compareTime}>Tap</button>
            <button style={styles.btnStyle} onMouseDown={startTransport}>Start</button>
            <button style={styles.btnStyle} onMouseDown={stopTransport}>Stop</button>
        </TransportComponent>
    )
}

const styles = {
    // transportStyle: {
    //     justifySelf: 'center',
    //     alignSelf: 'center',
    //     gridColumn: '1/3',
    //     margin: '1rem',
    // },
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