import React from 'react';
import GridDisplay from "./../GridDisplay";

function RhythmDisplay() {
    return (
        <div style={rhythmDisplayStyle}>
            <p>RhythmDisplay</p>
            <GridDisplay />
        </div>
    )
}

const rhythmDisplayStyle = {
    border: '1px solid red',
    overflow: 'auto',
    width: '100%',
    padding: '1rem'
}

export default RhythmDisplay;