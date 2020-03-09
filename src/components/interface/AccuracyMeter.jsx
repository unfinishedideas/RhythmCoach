import React from 'react';

function AccuracyMeter() {
    return (
        <div style={meterComponentStyle}>
            <h3 style={{ margin: '0' }} >Accuracy</h3>
            <div style={meterBoxStyle}>
                <h3 style={meterTextStyle}>100%</h3>
            </div>
        </div>
    )
}

const meterComponentStyle = {
    textAlign: 'center',

}

const meterBoxStyle = {
    height: '100px',
    width: '148px',
    background: 'white',
    display: 'table',
    color: 'rgb(0,255,50)',
    // margin: '1rem',
    border: '4px rgb(150,150,150) solid',
    padding: '1rem'
}

const meterTextStyle = {
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '58px',
    color: 'rgb(0,255,100)',
    textShadow: '2px 2px black'
}

export default AccuracyMeter;