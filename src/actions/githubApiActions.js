import * as types from './actionTypes';
import axios from 'axios';

const githubUri = 'https://api.github.com';

export function getUserDetailsSuccess(userDetails) {
    return { type: types.GET_USER_DETAILS, userDetails };
}

export function getUserReposSuccess(userRepos) {
    return { type: types.GET_USER_REPOS, userRepos };
}

export function unloadGithubUserState() {
    return { type: types.UNLOAD_USER_INFO };
}

export function getUserDetails(username) {
    return function(dispatch) {
        axios.get(`${githubUri}/users/${username}`)
        .then(userDetails => {
            dispatch(getUserDetailsSuccess(userDetails));
            getUserRepos(userDetails.repos_url);
        }).catch(error => {
            throw(error);
        });
    };
}

export function getUserRepos(userReposUri) {
    return function(dispatch) {
        axios.get(userReposUri)
        .then(userRepos => {
            dispatch(getUserReposSuccess(userRepos));
        }).catch(error => {
            throw(error);
        });
    };
}