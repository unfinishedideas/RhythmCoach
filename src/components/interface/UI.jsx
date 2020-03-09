import React from "react";
import GridDisplay from "./GridDisplay";
import { changeCurrentTarget } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Counter from './controlpanel/Counter';
import RhythmDisplay from './controlpanel/RhythmDisplay';
import Transport from './controlpanel/Transport';

function UI(props) {
  // const currentTarget = useSelector(state => state.currentTarget);
  const dispatch = useDispatch();

  const rhythmSelector = (selection) => {
    // dispatch(changeCurrentRhythm(selection))
    console.log("hey", selection);
    // props.toggleTransport();
  };

  return (
    <div style={mainUiStyle}>
      <div style={listStyle}>
        <h3>Rhythms</h3>
        <h4>1/4 Note</h4>
        <button onClick={() => (rhythmSelector(1))}>Hey</button>
        <h4>1/8 Note</h4>
        <button onClick={() => (rhythmSelector(2))}>Hey</button>
        <h4>1/16 Note</h4>
        <button onClick={() => (rhythmSelector(3))}>Hey</button>
      </div>
      <div style={controlsStyle}>
        <div style={topPartStyle}>
          <Counter />
          <RhythmDisplay />
        </div>
        <Transport />
        <GridDisplay />
      </div>
    </div>
  );
}

const mainUiStyle = {
  border: "1px solid black",
  display: "flex",
  margin: "2rem"
};
const listStyle = {
  border: "1px solid black"
};
const controlsStyle = {
  border: "1px solid black"
};
const topPartStyle = {
  display: 'flex'
}

export default UI;

UI.propTypes = {
  toggleTransport: PropTypes.func
};
