import React from 'react';

function Counter() {
    return (
        <div style={counterBoxStyle}>
            <h3 style={counterStyle}>4</h3>
        </div>
    )
}

const counterBoxStyle = {
    border: '1px solid black',
    height: '100px',
    width: '100px',
    display: 'flex'
}
const counterStyle = {
    textAlign: 'center'
}

export default Counter;