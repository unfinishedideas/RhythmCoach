import React from 'react';
import PropTypes from 'prop-types';

function ScoreBox(props) {
    return (
        <div style={scoreComponentStyle}>
            <h3 style={{ margin: '0' }}>{props.title}</h3>
            <div style={scoreBoxStyle}>
                <h3 style={scoreStyle}>{props.value}</h3>
            </div>
        </div>
    )
};

const scoreComponentStyle = {
    justifySelf: 'center',
    alignSelf: 'end',
    textAlign: 'center',
    width: '100%'
}

const scoreBoxStyle = {
    height: '6rem',
    width: '9rem',
    margin: '0 auto',
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
    fontSize: '3rem',
    color: 'rgb(0,255,100)',
    textShadow: '2px 2px black'
}

ScoreBox.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
}

export default ScoreBox;