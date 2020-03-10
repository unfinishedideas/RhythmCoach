import React from 'react';
import PropTypes from 'prop-types';

const rhythmSelector = (selection) => {
    // dispatch(changeCurrentRhythm(selection))
    console.log("hey", selection);
    // props.toggleTransport();
};

function RhythmList(props) {
    const styles = {
        listComponentStyle: {
            background: 'rgb(100,100,100)',
            gridColumn: '1/5',
            padding: '1rem'
        },

        listStyle: {
            display: props.isShown ? 'block' : 'none',
        },

        toggleBtnStyle: {

        }
    }

    const toggleList = () => { props.listHelper() }

    return (
        <div style={styles.listComponentStyle}>
            <h3 style={{ margin: '0' }}>Rhythm List</h3>
            <button style={styles.toggleBtnStyle} onClick={toggleList}>Toggle</button>
            <div style={styles.listStyle}>
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