import React from "react";
// import GridDisplay from "./GridDisplay";
import { changeCurrentTarget } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Counter from './Counter';
import RhythmDisplay from './RhythmDisplay';
import Transport from './Transport';
import ScoreBox from "./Scorebox";
import AccuracyMeter from "./AccuracyMeter";
import Instructions from './Instructions';
import RhythmList from './RhythmList';

function UI(props) {
  // const currentTarget = useSelector(state => state.currentTarget);
  const dispatch = useDispatch();



  return (
    <div style={mainUiStyle}>
      <RhythmList isShown={true} />
      <div style={controlsStyle}>
        <div style={mainBodyStyle}>
          <RhythmDisplay />
          <AccuracyMeter />
          <Transport />
          <ScoreBox />
          <Instructions />
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

const controlsStyle = {
  // border: "1px solid black",
  // width: '85%',
  // padding: '1rem',
  background: 'rgb(50,50,50)'
};
const mainBodyStyle = {
  // border: '1px solid green',
  // display: 'flex',
  // justifyContent: 'space-between',
  // padding: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr'
}

export default UI;

UI.propTypes = {
  toggleTransport: PropTypes.func
};
