import React from 'react';

function Header() {
    return (
        <div style={styles.headerStyle}>
            <h1 style={styles.heroTextStyle}>The Rhythm Coach</h1>
            <p style={styles.versionText}>Ver. 0.1</p>
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
        marginBottom: '0'
    },
    versionText: {
        color: 'white',
        textAlign: 'center'
    }
}

export default Header;