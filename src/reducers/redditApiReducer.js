import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.redditApi, action) {
    debugger;
    switch (action.type) {
        case types.GET_USER_COMMENTS:
            return {...state, userComments: action.userComments}
        
        case types.GET_USER_SUBMITTED:
            return {...state, userSubmissions: action.userSubmissions}
    
        default:
            return state;
    }
}