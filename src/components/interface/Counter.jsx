import React from 'react';

function Counter() {
    return (
        <div style={styles.counterBoxStyle}>
            <h3 style={styles.counterStyle}>4</h3>
        </div>
    )
}
const styles = {
    counterBoxStyle: {
        border: '4px rgb(150,150,150) solid',
        width: '6rem',
        height: '6rem',
        display: 'table',
        background: 'white',
        margin: '1rem',
    },
    counterStyle: {
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
        fontSize: '3rem',
        color: 'rgb(0,255,100)',
        textShadow: '2px 2px black'
    }
}


export default Counter;