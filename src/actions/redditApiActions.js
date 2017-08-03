import * as types from './actionTypes';
import axios from 'axios';

let redditUrl = 'http://www.reddit.com';

export function getUserCommentsSuccess(userComments) {
    return { type: types.GET_USER_COMMENTS, userComments };
}

export function getUserSubmittedSuccess(userSubmissions) {
    return { type: types.GET_USER_SUBMITTED, userSubmissions };
}

export function unloadRedditCommentsState() {
    return { type: types.UNLOAD_REDDIT_USER_COMMENTS };
}

export function unloadRedditSubmittedState() {
    return { type: types.UNLOAD_REDDIT_USER_SUBMISSIONS };
}

export function getUserComments(username) {
    return function(dispatch) {
        axios.get(`${redditUrl}/user/${username}/comments/.json`)
        .then(({data}) => {
            dispatch(getUserCommentsSuccess(data.data.children))
        }).catch(error => {
            throw(error);
        });
    };
}

export function getUserSubmitted(username) {
    return function(dispatch) {
        axios.get(`${redditUrl}/user/${username}/submitted/.json`)
        .then(({data}) => {
            dispatch(getUserSubmittedSuccess(data.data.children))
        }).catch(error => {
            throw(error);
        });
    };
}