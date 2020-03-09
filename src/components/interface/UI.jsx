import React from "react";
// import GridDisplay from "./GridDisplay";
import { changeCurrentTarget } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Counter from './controlpanel/Counter';
import RhythmDisplay from './controlpanel/RhythmDisplay';
import Transport from './controlpanel/Transport';
import ScoreBox from "../Scorebox";
import AccuracyMeter from "../AccuracyMeter";

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
          <AccuracyMeter />
          {/* <div /> */}
        </div>
        <div style={bottomPartStyle}>
          <Transport />
          <ScoreBox />
        </div>
      </div>
    </div>
  );
}

const mainUiStyle = {
  border: "1px solid black",
  borderRadius: '20px',
  padding: '1rem',
  display: "flex",
  margin: "5rem",
  background: 'rgb(50,50,50)',
  color: 'white'
};
const listStyle = {
  border: "1px solid black",
  width: '15%',
  padding: '1rem'
};
const controlsStyle = {
  border: "1px solid black",
  width: '85%',
  padding: '1rem'
};
const topPartStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid green',
}
const bottomPartStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  border: '1px solid blue',
  padding: '1rem',
  background: 'rgb(25,25,25)'
}

export default UI;

UI.propTypes = {
  toggleTransport: PropTypes.func
};
