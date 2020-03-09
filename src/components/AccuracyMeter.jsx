import React from 'react';

function AccuracyMeter() {
    return (
        <div style={meterBoxStyle}>
            <h3 style={meterTextStyle}>100%</h3>
        </div>
    )
}

const meterBoxStyle = {
    height: '120px',
    width: '120px',
    background: 'white',
    display: 'table',
    color: 'rgb(0,255,50)',
    margin: '1rem',
    border: '4px black solid',
    padding: '1rem'
}

const meterTextStyle = {
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '50px',
    color: 'rgb(0,255,100)',
    textShadow: '2px 2px black'
}

export default AccuracyMeter;