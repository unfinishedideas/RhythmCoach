import React from 'react';
import GridDisplay from "./GridDisplay";
import Counter from './Counter';
import PropTypes from 'prop-types';

function RhythmDisplay(props) {

    return (
        <div style={styles.rhythmComponentStyle}>
            <div style={styles.rhythmDisplayStyle}>
                <Counter count={props.count} />
                <GridDisplay />
            </div>
        </div>
    )
}
const styles = {
    rhythmComponentStyle: {
        width: '95%',
        justifySelf: 'center',
        alignSelf: 'end',
        gridColumn: '1/4',
        background: 'rgb(25,25,25)',
        border: '4px solid rgb(150,150,150)',
        borderRadius: '10px',
        boxShadow: '2px 2px black',
    },

    rhythmDisplayStyle: {
        padding: '1rem',
        display: 'flex',
    },
}

RhythmDisplay.propTypes = {
    count: PropTypes.number
}

export default RhythmDisplay;