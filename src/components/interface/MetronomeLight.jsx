import React from 'react';
import PropTypes from 'prop-types';

function MetronomeLight(props) {

    const metronomeStyle = {
        background: 'red',
        borderRadius: '360px',
        height: '20px',
        width: '20px',
        float: 'right',
        // alignSelf: 'flex-start',
    }

    return (
        <div style={metronomeStyle}></div>
    )
}

export default MetronomeLight