import React from 'react';
import {Switch, Route} from 'react-router-dom';
import RedditApiActions from '../reddit/redditApiActions';
import UserCommentsPage from '../reddit/redditUserComments';

class RedditPage extends React.Component {
    render() {
        return (
            <div>
                <h2>Reddit API Calls</h2>
                <p>Select an action to perform with the Reddit API.</p>
                <Switch>
                    <Route exact path='/reddit' component={RedditApiActions}/>
                    <Route path='/reddit/usercomments' component={UserCommentsPage}/>
                </Switch>
            </div>
        );
    }
}

export default RedditPage;