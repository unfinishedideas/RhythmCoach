import React from 'react';
import MetronomeLight from "./MetronomeLight";
function MessageBox() {
    const styles = {
        messageComponentStyle: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '100%',
            height: '100%'
        },
        boxStyles: {
            background: 'rgb(25,25,25)',
            width: '100%',
            border: '4px solid rgb(150,150,150)',
            padding: '1rem',
            boxSizing: 'border-box',
            borderRadius: '10px',
            margin: '0 auto',
            boxShadow: '2px 2px black'
            // gridColumn: '1/5',
        }
    }
    return (
        <div style={styles.messageComponentStyle}>
            <MetronomeLight lightOn={false} />
            <div style={styles.boxStyles}>
                <p>Wow, great job!</p>
            </div>
        </div>
    );
}

export default MessageBox;