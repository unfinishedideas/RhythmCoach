import React from 'react';

function ScoreBox() {
    return (
        <div style={scoreComponentStyle}>
            <h3>Current Score</h3>
            <div style={scoreBoxStyle}>
                <h3 style={scoreStyle}>4000</h3>
            </div>
        </div>
    )
};

const scoreComponentStyle = {
    textAlign: 'center'
}

const scoreBoxStyle = {
    height: '100px',
    width: '150px',
    background: 'white',
    display: 'table',
    color: 'rgb(0,255,50)',
    margin: '1rem',
    border: '4px black solid',
    padding: '1rem'
}

const scoreStyle = {
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '50px',
    color: 'rgb(0,255,100)',
    textShadow: '2px 2px black'
}

export default ScoreBox;