import {combineReducers} from 'redux';
import redditApi from './redditApiReducer';

const rootReducer = combineReducers({
    redditApi
});

export default rootReducer;