import React, { useState } from "react";
// import GridDisplay from "./GridDisplay";
// import { changeCurrentTarget } from "../../actions";
// import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import RhythmDisplay from './RhythmDisplay';
import Transport from './Transport';
import ScoreBox from "./Scorebox";
import Instructions from './Instructions';
import RhythmList from './RhythmList';
import MessageBox from './MessageBox';
import { connect } from 'react-redux';
import styled from 'styled-components';

function UI(props) {
  // const currentTarget = useSelector(state => state.currentTarget);
  // const dispatch = useDispatch();

  const [listIsShown, toggleList] = useState(false);
  const [instructionsShown, toggleInstructions] = useState(false);

  const listHelper = () => {
    toggleList(!listIsShown);
  };
  const instructionHelper = () => {
    toggleInstructions(!instructionsShown);
  };

  const MainDisplay = styled.div`
    border: 1px solid black;
    border-radius: 20px;
    padding: 1rem;
    color: white;
    max-width: 75rem;
    margin: 0 auto;
    background: rgb(150,150,150);

    @media (max-width: 1000px) {
      margin: 0;
    }
    `;

  const Controller = styled.div`
    background: rgb(50,50,50);
    display: grid;
    padding: 1rem;
    align-items: end;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 2rem;
    width: 100%;
    border-radius: 10px 10px 0 0;

    @media (max-width: 1000px) {
      display: flex;
      flex-direction: column;
    }
  `;

  // const RhythmDisplay = styled.div`
  //   @media (max-width: 1000px) {

  //   }
  // `;

  return (
    <MainDisplay>
      <Controller>
        <RhythmDisplay targetArray={props.state.targetArray} />
        <MessageBox metronomeOn={props.state.metronomeOn} />
        <Transport onStartTransport={props.onStartTransport} onStopTransport={props.onStopTransport} onCompareTime={props.onCompareTime} onPlayUserSound={props.onPlayUserSound} />
        <ScoreBox title={'Accuracy'} value={props.state.accuracyRating} />
        <ScoreBox title={'Score'} value={4000} />
      </Controller>
      <RhythmList isShown={listIsShown} listHelper={listHelper} />
      <Instructions isShown={instructionsShown} instructionHelper={instructionHelper} />
    </MainDisplay>
  );
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