import React from 'react';

function Counter() {
    return (
        <div style={counterBoxStyle}>
            <h3 style={counterStyle}>4</h3>
        </div>
    )
}

const counterBoxStyle = {
    border: '4px black solid',
    height: '100px',
    width: '100px',
    display: 'table',
    background: 'white',
    margin: '1rem',
}
const counterStyle = {
    textAlign: 'center',
    display: 'table-cell',
    verticalAlign: 'middle',
    fontSize: '48px',
    color: 'rgb(0,255,100)',
    textShadow: '2px 2px black'
}

export default Counter;