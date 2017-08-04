import React from 'react';
import {Switch, Route} from 'react-router-dom';
import GithubApiActions from '../github/githubApiActions';
import GithubUserPage from '../github/githubUserPage';

class GithubPage extends React.Component {
    render() {
        return (
            <div>
                <h2>GitHub API Calls</h2>
                <p>Select an action to perform with the GitHub API.</p>
                <Switch>
                     <Route exact path='/github' component={GithubApiActions} />
                     <Route path='/github/userdetails' component={GithubUserPage} />
                </Switch>
            </div>
        );
    }
}

export default GithubPage;