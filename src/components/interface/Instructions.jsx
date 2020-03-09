import React from 'react';

function Instructions() {
    return (
        <div style={instructionStyle}>
            <h3>Instructions</h3>
            <p>THIS IS HOW YOU USE THIS THING Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nam suscipit quod voluptatibus officia debitis a nesciunt, quam perspiciatis reiciendis.</p>
        </div>
    )
}

const instructionStyle = {
    background: 'black',
    width: '100%',
    gridColumn: '1/5',
    padding: '1rem',
    boxSizing: 'border-box'
}

export default Instructions;