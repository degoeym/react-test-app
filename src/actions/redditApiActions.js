import * as types from './actionTypes';
import axios from 'axios';

let redditUrl = 'http://www.reddit.com';

export function getUserCommentsSuccess(userComments) {
    return { type: types.GET_USER_COMMENTS, userComments };
}

export function getUserComments(username) {
    return function(dispatch) {
        axios.get(`${redditUrl}/user/${username}/comments/.json`)
        .then(comments => {
            dispatch(getUserCommentsSuccess(comments));
        }).catch(error => {
            throw(error);
        });
    };
}