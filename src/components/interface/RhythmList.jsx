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
            <h3 style={{ margin: '0' }}>Backing Track</h3>
            <button style={styles.toggleBtnStyle} onClick={toggleList}>Toggle</button>
            <div style={styles.listStyle}>
                <button onClick={() => (rhythmSelector(1))}>Track 1</button>
                <button onClick={() => (rhythmSelector(2))}>Track 2</button>
                <button onClick={() => (rhythmSelector(3))}>Track 3</button>
            </div>
        </div>
    )
}

RhythmList.propTypes = {
    isShown: PropTypes.bool,
    listHelper: PropTypes.func
}

export default RhythmList;