import {combineReducers} from 'redux';
import reddit from './redditApiReducer';


const rootReducer = combineReducers({
    reddit
});

export default rootReducer;