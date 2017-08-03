import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.redditApi, action) {
    debugger;
    switch (action.type) {
        case types.UNLOAD_REDDIT_USER_COMMENTS:
            return {...state, userComments: []}
        case types.UNLOAD_REDDIT_USER_SUBMISSIONS:
            return {...state, userSubmissions: []}
        case types.GET_USER_COMMENTS:
            return {...state, userComments: action.userComments}
        
        case types.GET_USER_SUBMITTED:
            return {...state, userSubmissions: action.userSubmissions}
    
        default:
            return state;
    }
}