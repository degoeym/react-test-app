import React from 'react';
import {Link} from 'react-router-dom';

class GithubActions extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/github/userdetails'}>Get User Details</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default GithubActions;