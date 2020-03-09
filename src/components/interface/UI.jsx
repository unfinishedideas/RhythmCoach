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
        <h3>Rhythm List</h3>
        <h4>1/4 Note</h4>
        <button onClick={() => (rhythmSelector(1))}>Hey</button>
        <h4>1/8 Note</h4>
        <button onClick={() => (rhythmSelector(2))}>Hey</button>
        <h4>1/16 Note</h4>
        <button onClick={() => (rhythmSelector(3))}>Hey</button>
      </div>
      <div style={controlsStyle}>
        <div style={mainBodyStyle}>
          <RhythmDisplay />
          <AccuracyMeter />
          <Transport />
          <ScoreBox />
        </div>


      </div>
    </div>
  );
}

const mainUiStyle = {
  // border: "1px solid black",
  borderRadius: '20px',
  padding: '1rem',
  display: "flex",
  background: 'rgb(150,150,150)',
  color: 'white',
  maxWidth: '1200px',
  margin: '0 auto'
};
const listStyle = {
  // border: "1px solid black",
  width: '15%',
  padding: '1rem',
  background: 'rgb(100,100,100)'
};
const controlsStyle = {
  // border: "1px solid black",
  width: '85%',
  padding: '1rem',
  background: 'rgb(50,50,50)'
};
const mainBodyStyle = {
  // border: '1px solid green',
  // display: 'flex',
  // justifyContent: 'space-between',
  // padding: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr'
}

export default UI;

UI.propTypes = {
  toggleTransport: PropTypes.func
};
