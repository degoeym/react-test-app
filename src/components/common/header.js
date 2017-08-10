import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#testapp-navbar" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#">React Test App</a>
                </div>

                <div className="collapse navbar-collapse" id="testapp-navbar">
                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home</Link></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" 
                                role="button" aria-haspopup="true" aria-expanded="false">API Calls <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><Link to="/reddit">Reddit API</Link></li>
                                <li><Link to="/github">GitHub API</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;