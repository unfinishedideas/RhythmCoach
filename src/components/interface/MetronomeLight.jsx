import React from 'react';
import PropTypes from 'prop-types';

function MetronomeLight(props) {

    const metronomeStyle = {
        background: props.lightOn ? 'red' : 'black',
        borderRadius: '360px',
        border: '2px black solid',
        height: '1.5rem',
        width: '1.5rem',
    }

    return (
        <div style={metronomeStyle}></div>
    )
}

MetronomeLight.propTypes = {
    lightOn: PropTypes.bool
}

export default MetronomeLight