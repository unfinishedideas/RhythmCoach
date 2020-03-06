import React from 'react';
import GridDisplay from './GridDisplay';
import { changeCurrentTarget } from './../actions';
import { useSelector, useDispatch } from 'react-redux';

function UI(){
    const currentTarget = useSelector(state => state.currentTarget);
    const dispatch = useDispatch();
return(
        <div>
            <h1>Current Target: {currentTarget}</h1>
            <button onClick={() => dispatch(changeCurrentTarget(1))}>Add target</button>
            <GridDisplay/>
        </div>
    );
}

export default UI;



