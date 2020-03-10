import React from "react";
import PropTypes from "prop-types";

function GridBox(props) {
  const toggleBox = () => {
    props.toggleBox(props.id);
  };

  const gridBoxStyle = {
    height: "1.5rem",
    width: "1.5rem",
    backgroundColor: props.isOn ? "rgb(255,100,100)" : "rgb(50,50,255)",
    border: "2px solid black",
    color: "red",
    justifySelf: 'center',
    alignSelf: 'end',
  };
  return <div style={gridBoxStyle} onClick={toggleBox} />;
}

GridBox.propTypes = {
  toggleBox: PropTypes.func,
  isOn: PropTypes.bool,
  id: PropTypes.number
};

export default GridBox;
