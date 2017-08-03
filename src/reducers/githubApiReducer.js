import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function githubApiReducer(state = initialState.githubApi, action) {
    debugger;
    switch (action.type) {
        case types.UNLOAD_USER_INFO:
            return {...state, userDetails: [], userRepos: []};

        case types.GET_USER_DETAILS:
            return {
                ...state,
                userDetails: Object.assign({}, action.userDetails)
            };

        case types.GET_USER_REPOS:
            return {...state, userRepos: action.userRepos};

        default:
            return state;
    }
}