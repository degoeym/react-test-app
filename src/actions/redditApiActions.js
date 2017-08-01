import * as types from './actionTypes';
import axios from 'axios';

let redditUrl = 'http://www.reddit.com';

export function loadUserCommentsSuccess(redditUserComments) {
    return { type: types.LOAD_USER_COMMENTS, redditUserComments };
}

export function getUserCommentsSuccess(userComments) {
    debugger;
    return { type: types.GET_USER_COMMENTS, userComments };
}

export function loadUserComments() {
    return function(dispatch) {
        dispatch(loadUserCommentsSuccess);
    };
}

export function getUserComments(username) {
    return function(dispatch) {
        axios.get(`${redditUrl}/user/${username}/comments/.json`)
        .then(({data}) => { 
            debugger;
            dispatch(getUserCommentsSuccess(data.data.children))
        }).catch(error => {
            throw(error);
        });
    };
}