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
        display: props.isShown ? 'block' : 'none',
    };

    const listComponentStyle = {
        width: props.isShown ? '15%' : '3%',
        padding: props.isShown ? '1rem' : '0',
        background: 'rgb(100,100,100)'
    }

    const toggleBtnStyle = {
        width: props.isShown ? '20px' : '100%',
        height: props.isShown ? '20px' : '100%',
        // transform: props.isShown ? '' : 'rotate(-90deg)',
    }

    const toggleList = () => { props.listHelper() }

    return (
        <div style={listComponentStyle}>
            <button style={toggleBtnStyle} onClick={toggleList}></button>
            <div style={listStyle}>
                <h3>Rhythm List</h3>
                <h4>1/4 Note</h4>
                <button onClick={() => (rhythmSelector(1))}>Hey</button>
                <h4>1/8 Note</h4>
                <button onClick={() => (rhythmSelector(2))}>Hey</button>
                <h4>1/16 Note</h4>
                <button onClick={() => (rhythmSelector(3))}>Hey</button>
            </div>
        </div>
    )
}

RhythmList.propTypes = {
    isShown: PropTypes.bool,
    listHelper: PropTypes.func
}

export default RhythmList;