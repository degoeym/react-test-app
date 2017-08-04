import React from 'react';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/home/homePage';
import AboutPage from './components/about/aboutPage';
import RedditPage from './components/reddit/redditPage';
import GithubPage from './components/github/githubPage';

class Main extends React.Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='/about' component={AboutPage}/>
                    <Route path='/reddit' component={RedditPage}/>
                    <Route path='/github' component={GithubPage}/>
                </Switch>
            </main>
        );
    }
}

export default Main;