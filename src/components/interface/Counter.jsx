import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const CounterComponent = styled.div`
margin-right: 20px;

@media (max-width: 50px) {
    display: none;
  }
`;

function Counter(props) {



    return (
        <CounterComponent>
            <h3 style={styles.counterStyle}>{props.count}</h3>
        </CounterComponent>
    )
}
const styles = {
    // counterBoxStyle: {
    //     border: '4px rgb(150,150,150) solid',
    //     width: '6rem',
    //     height: '6rem',
    //     display: 'table',
    //     background: 'white',
    //     margin: '1rem',
    // },
    counterStyle: {
        textAlign: 'center',
        display: 'table-cell',
        verticalAlign: 'middle',
        fontSize: '3rem',
        color: 'rgb(0,255,100)',
        textShadow: '2px 2px black'
    }
}

Counter.propTypes = {
    count: PropTypes.number
}

export default Counter;