import React from 'react';

const GithubUserDetails = ({user, repos}) => {
    debugger;
    let rows = repos.map(repo => {
        return (
            <tr key={repo.id}>
                <td>
                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                </td>
                <td>{repo.description}</td>
                <td>{repo.stargazers_count}</td>
                <td>{repo.language}</td>
            </tr>
        );
    });

    return (
        <div>
            <div>
                <h2>
                    {user.login}
                    {' | '}
                    <span>
                        <small>{user.name}</small>
                        <a href={user.html_url}><small>Profile</small></a>
                    </span>
                </h2>
                <div className="row">
                    <div className="col-sm-2 col-xs-12 text-center">
                        <img className="img-responsive img-thumbnail" src={user.avatar_url} alt="Profile" title={user.name} />
                    </div>
                    <div className="col-sm-10 col-xs-12">
                        <span><b>Location: </b>{user.location}</span>
                        <br/>
                        <span><b>Email: </b><a href={`mailto:${user.email}`}>
                            {user.email}</a></span>
                        <br/>
                        <span><b>Blog: </b><a href={user.blog} target="_blank">{user.blog}</a></span>
                        <br/>
                        <b>Public repos: </b>{user.public_repos}
                        <br/>
                        <b>Followers: </b>{user.followers}
                        <br/>
                        <b>Following: </b>{user.following}
                        <br/>
                        <b>User Since: </b>{user.created_at}
                    </div>
                </div>
                <br/>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Stars</th>
                            <th>Language</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GithubUserDetails;