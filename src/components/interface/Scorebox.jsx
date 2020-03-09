import React from 'react';

function ScoreBox() {
    return (
        <div style={scoreComponentStyle}>
            <h3 style={{ margin: '0' }}>Current Score</h3>
            <div style={scoreBoxStyle}>
                <h3 style={scoreStyle}>4000</h3>
            </div>
        </div>
    )
};

const scoreComponentStyle = {
    textAlign: 'center',
    justifySelf: 'center',
    alignSelf: 'end',
}

const scoreBoxStyle = {
    height: '100px',
    width: '148px',
    background: 'white',
    display: 'table',
    color: 'rgb(0,255,50)',
    marginBottom: '1rem',
    border: '4px rgb(150,150,150) solid',
    padding: '1rem'
}

const scoreStyle = {
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '48px',
    color: 'rgb(0,255,100)',
    textShadow: '2px 2px black'
}

export default ScoreBox;