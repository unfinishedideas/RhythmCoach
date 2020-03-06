import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GridBox(props) {

    const toggleBox = () => {props.toggleBox(props.id)}

    const gridBoxStyle = {
        height: '30px',
        width: '30px',
        backgroundColor: props.isOn? 'red' : 'blue',
        border: '2px solid black',
        color: 'red'
    }
    return(
        <div style={gridBoxStyle} onClick={toggleBox} />
    );
};
    

GridBox.propTypes = {
    toggleBox: PropTypes.func,
    isOn: PropTypes.bool,
    id: PropTypes.number
}

export default GridBox;