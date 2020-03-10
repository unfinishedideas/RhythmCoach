import React, { useState } from "react";
// import GridDisplay from "./GridDisplay";
import { changeCurrentTarget } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import RhythmDisplay from './RhythmDisplay';
import Transport from './Transport';
import ScoreBox from "./Scorebox";
import Instructions from './Instructions';
import RhythmList from './RhythmList';
import MessageBox from './MessageBox';

function UI(props) {
  // const currentTarget = useSelector(state => state.currentTarget);
  const dispatch = useDispatch();

  const [listIsShown, toggleList] = useState(false);
  const [instructionsShown, toggleInstructions] = useState(false);

  const listHelper = () => {
    toggleList(!listIsShown);
  };
  const instructionHelper = () => {
    toggleInstructions(!instructionsShown);
  };

  return (
    <div style={styles.mainUiStyle}>

      <div style={styles.controllerStyle}>
        <RhythmDisplay />
        <MessageBox />
        <Transport />
        <ScoreBox title={'Accuracy'} value={'100%'} />
        <ScoreBox title={'Score'} value={'4000'} />
      </div>
      <RhythmList isShown={listIsShown} listHelper={listHelper} />
      <Instructions isShown={instructionsShown} instructionHelper={instructionHelper} />
    </div>
  );
}
const styles = {
  mainUiStyle: {
    // border: "1px solid black",
    borderRadius: '20px',
    padding: '1rem',
    // display: "flex",
    color: 'white',
    maxWidth: '75rem',
    margin: '0 auto',
    background: 'rgb(150,150,150)',
  },

  controllerStyle: {
    // border: '1px solid green',
    background: 'rgb(50,50,50)',
    display: 'grid',
    padding: '1rem',
    alignItems: 'end',
    boxSizing: 'border-box',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridRowGap: '2rem',
    width: '100%',
  },

  topRightStyle: {
    justifySelf: 'center',
    alignSelf: 'center',
    height: '100%',
    width: "100%"
  }

}


export default UI;

UI.propTypes = {
  toggleTransport: PropTypes.func
};
