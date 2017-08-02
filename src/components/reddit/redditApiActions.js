import React from 'react';
import {Link} from 'react-router-dom';

class RedditActions extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/reddit/usercomments'}>Get User Comments</Link>
                    </li>
                    <li>
                        <Link to={'/reddit/usersubmitted'}>Get User Submitted Posts</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default RedditActions;