import targetingReducer from './targeting.js';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    currentTarget: targetingReducer
});

export default rootReducer;