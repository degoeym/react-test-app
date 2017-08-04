import React from 'react';

const GithubUserDetails = ({user, repos}) => {
    debugger;

    return (
        <div>
            <div>
                <h2>
                    {user.login}
                    {' | '}
                    <span>
                        {user.name && <small>{user.name}</small>}
                        <a href={user.html_url}><small>Profile</small></a>
                    </span>
                </h2>
                <div className="row">
                    <div className="col-sm-2 col-xs-12 text-center">
                        <img className="img-responsive img-thumbnail" src={user.avatar_url} alt="Profile" title={user.name} />
                    </div>
                    <div className="col-sm-10 col-xs-12">
                        {user.location && <div><b>Location: </b>{user.location}</div>}
                        {user.email && <div><b>Email: </b><a href={`mailto:${user.email}`}>
                            {user.email}</a></div>}
                        {user.blog && <div><b>Blog: </b><a href={user.blog} target="_blank">{user.blog}</a></div>}
                        <b>Public repos: </b>{user.public_repos}
                        <br/>
                        <b>Followers: </b>{user.followers}
                        <br/>
                        <b>Following: </b>{user.following}
                        <br/>
                        <b>User Since: </b>{user.created_at}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubUserDetails;