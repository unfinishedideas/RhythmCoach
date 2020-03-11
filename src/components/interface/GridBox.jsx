import React from 'react';
import PropTypes from 'prop-types';

function GridBox(props) {
  const toggleBox = () => {
    props.toggleBox(props.id);
  };

  const gridBoxStyle = {
    height: '1.5rem',
    width: '1.5rem',
    backgroundColor: props.isOn ? 'rgb(255,100,100)' : 'rgb(50,50,255)',
    color: props.bigCount ? 'yellow' : 'white',
    border: '2px solid black',
    // justifySelf: 'center',
    textAlign: 'center',
    alignSelf: 'end',
  };
  return <div style={gridBoxStyle} onClick={toggleBox}>{props.count}</div>;
}

GridBox.propTypes = {
  toggleBox: PropTypes.func,
  isOn: PropTypes.bool,
  id: PropTypes.number,
  count: PropTypes.string,
  bigCount: PropTypes.bool
};

export default GridBox;
