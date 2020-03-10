import React from 'react';
import GridDisplay from "./GridDisplay";
import Counter from './Counter';

function RhythmDisplay() {
    return (
        <div style={styles.rhythmComponentStyle}>
            {/* <p style={rhythmTitleStyle}>Rhythm Display</p> */}
            <div style={styles.rhythmDisplayStyle}>
                <Counter />
                <GridDisplay />
            </div>
        </div>
    )
}
const styles = {
    rhythmComponentStyle: {
        width: '90%',
        justifySelf: 'center',
        alignSelf: 'end',
        gridColumn: '1/4',
        background: 'rgb(25,25,25)',
        border: '4px solid rgb(150,150,150)',
        // boxSizing: 'border-box',
        // marginLeft: '20px'
        // textAlign: 'center'
    },

    rhythmTitleStyle: {
        color: 'red',
        margin: '0 2rem'
    },

    rhythmDisplayStyle: {
        // border: '1px solid red',
        // overflow: 'auto',
        // width: '100%',
        padding: '1rem',
        display: 'flex',
    },
}



export default RhythmDisplay;