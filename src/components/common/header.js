import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            {" | "}
            <Link to="/reddit">Reddit API</Link>
            {" | "}
            <Link to="/github">GitHub API</Link>
            {" | "}
            <Link to="/about">About</Link>
        </nav>
    );
};

export default Header;