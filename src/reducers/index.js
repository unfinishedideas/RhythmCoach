import targetingReducer from './targeting.js';
import distanceCalc from './distanceCalc';
import accuracyReducer from './accuracyReducer';
import metronomeReducer from './metronomeReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    currentTarget: targetingReducer,
    distanceToNextNote: distanceCalc,
    accuracyRating: accuracyReducer,
    metronomeOn: metronomeReducer
});

export default rootReducer;