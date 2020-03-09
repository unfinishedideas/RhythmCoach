import React from 'react';
import PropTypes from 'prop-types';

const rhythmSelector = (selection) => {
    // dispatch(changeCurrentRhythm(selection))
    console.log("hey", selection);
    // props.toggleTransport();
};

function RhythmList(props) {

    const listStyle = {
        // border: "1px solid black",
        width: '15%',
        display: props.isShown ? 'block' : 'none',
        padding: '1rem',
        background: 'rgb(100,100,100)'
    };

    return (
        <div style={listStyle}>
            <h3>Rhythm List</h3>
            <h4>1/4 Note</h4>
            <button onClick={() => (rhythmSelector(1))}>Hey</button>
            <h4>1/8 Note</h4>
            <button onClick={() => (rhythmSelector(2))}>Hey</button>
            <h4>1/16 Note</h4>
            <button onClick={() => (rhythmSelector(3))}>Hey</button>
        </div>
    )
}

RhythmList.propTypes = {
    isShown: PropTypes.bool
}

export default RhythmList;