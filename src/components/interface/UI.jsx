import React, { useState } from "react";
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

  const [listIsShown, toggleList] = useState(true);

  const listHelper = () => {
    toggleList(!listIsShown);
  };

  return (
    <div style={mainUiStyle}>
      <RhythmList isShown={listIsShown} listHelper={listHelper} />

      <div style={mainBodyStyle}>
        <RhythmDisplay />
        <AccuracyMeter />
        <Transport />
        <ScoreBox />
        <Instructions isShown={true} />
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

const mainBodyStyle = {
  // border: '1px solid green',
  background: 'rgb(50,50,50)',
  display: 'grid',
  padding: '1rem',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gridRowGap: '36px',
  width: '100%'
}

export default UI;

UI.propTypes = {
  toggleTransport: PropTypes.func
};
