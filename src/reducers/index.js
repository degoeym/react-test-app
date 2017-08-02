import {combineReducers} from 'redux';
import redditApi from './redditApiReducer';
import githubApi  from './githubApiReducer';

const rootReducer = combineReducers({
    redditApi,
    githubApi
});

export default rootReducer;