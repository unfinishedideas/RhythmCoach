import React from 'react';
import PropTypes from 'prop-types';

function Instructions(props) {
    const styles = {
        instructionStyle: {
            background: 'black',
            gridColumn: '1/5',
            boxSizing: 'border-box',
            padding: '1rem',
            borderRadius: '0 0 10px 10px'
        },

        instructionTextStyle: {
            display: props.isShown ? 'block' : 'none',
        },

        toggleSwitchStyle: {
            // margin: '0',
        }
    }

    const toggleDisplay = () => {
        props.instructionHelper();
    }

    return (
        <div style={styles.instructionStyle}>
            <div>
                <h3 style={{ margin: '0' }}>Instructions</h3>
                <button style={styles.toggleSwitchStyle} onClick={toggleDisplay}>Toggle</button>
            </div>
            <div style={styles.instructionTextStyle}>
                <p>THIS IS HOW YOU USE THIS THING Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nemo mollitia, aspernatur impedit voluptatum corporis ea quia culpa sed commodi quibusdam magnam animi quisquam ad ipsam, sit laboriosam iusto ratione. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nam suscipit quod voluptatibus officia debitis a nesciunt, quam perspiciatis reiciendis.</p>
            </div>
        </div>
    )
}

Instructions.propTypes = {
    isShown: PropTypes.bool,
    instructionHelper: PropTypes.func
}


export default Instructions;