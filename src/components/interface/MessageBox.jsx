import React from 'react';

import PropTypes from 'prop-types';

function MessageBox(props) {
    const styles = {
        messageComponentStyle: {
            width: '80%',
            // height: '80%'
        },
        boxStyles: {
            background: 'rgb(25,25,25)',
            border: '4px solid rgb(150,150,150)',
            padding: '1rem',
            boxSizing: 'border-box',
            borderRadius: '10px',
            margin: '0 auto',
            boxShadow: '2px 2px black',
            width: '300px',
            marginTop: '30px'
            // gridColumn: '1/5',
        }
    }
    return (
        <div style={styles.boxStyles}>
            <p>Wow, great job!</p>
        </div>
    );
}

MessageBox.propTypes = {
    metronomeOn: PropTypes.bool
}

export default MessageBox;