import React from 'react';

function Header() {
    return (
        <div style={styles.headerStyle}>
            <h1 style={styles.heroTextStyle}>The Rhythm Coach</h1>
        </div>
    )
}
const styles = {
    headerStyle: {

    },
    heroTextStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: '3rem',
    }
}

export default Header;