import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function redditApiReducer(state = initialState.redditUserComments, action) {
    switch (action.type) {
        case types.GET_USER_COMMENTS:
            return [
                ...state,
                Object.assign({}, action.redditUserComments)
            ];
    
        default:
            return state;
    }
}