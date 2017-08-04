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
    debugger;
    return function(dispatch) {
        axios.get(`${githubUri}/users/${username}`)
        .then(({data}) => {
            debugger;
            Promise.all([
                dispatch(getUserDetailsSuccess(data)),
                dispatch(getUserRepos(data.repos_url))
            ]);
            //dispatch(getUserDetailsSuccess(data));
            //getUserRepos(data.repos_url);
        }).catch(error => {
            throw(error);
        });
    };
}

export function getUserRepos(userReposUri) {
    debugger;
    return function(dispatch) {
        axios.get(userReposUri)
        .then(({data}) => {
            debugger;
            dispatch(getUserReposSuccess(data));
        }).catch(error => {
            throw(error);
        });
    };
}