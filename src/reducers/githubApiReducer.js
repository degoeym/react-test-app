import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function githubApiReducer(state = initialState.githubApi, action) {
    switch (action.type) {
        default:
            return state;
    }
}