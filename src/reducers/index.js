import targetingReducer from './targeting.js';
import distanceCalc from './distanceCalc';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentTarget: targetingReducer,
    distanceToNextNote: distanceCalc
});

export default rootReducer;