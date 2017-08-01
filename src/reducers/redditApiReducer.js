import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.redditUserComments, action) {
    debugger;
    switch (action.type) {
        case types.LOAD_USER_COMMENTS:
            return action.redditUserComments;

        case types.GET_USER_COMMENTS:
            return action.userComments;
    
        default:
            return state;
    }
}