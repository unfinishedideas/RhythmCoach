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
import { connect } from 'react-redux';

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
        <RhythmDisplay targetArray={props.state.targetArray} />
        <MessageBox metronomeOn={props.state.metronomeOn} />
        <Transport onStartTransport={props.onStartTransport} onStopTransport={props.onStopTransport} onCompareTime={props.onCompareTime} onPlayUserSound={props.onPlayUserSound} />
        <ScoreBox title={'Accuracy'} value={props.state.accuracyRating} />
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
    background: 'rgb(50,50,50)',
    display: 'grid',
    padding: '1rem',
    alignItems: 'end',
    boxSizing: 'border-box',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridRowGap: '2rem',
    width: '100%',
    borderRadius: '10px 10px 0 0'
  },

  topRightStyle: {
    justifySelf: 'center',
    alignSelf: 'center',
    height: '100%',
    width: "100%"
  }

}

UI.propTypes = {
  toggleTransport: PropTypes.func,
  onStartTransport: PropTypes.func,
  onStopTransport: PropTypes.func,
  onCompareTime: PropTypes.func,
  onPlayUserSound: PropTypes.func,
};

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(UI);