import React from 'react';

const GithubUserReposTable = ({repos}) => {
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
    );
};

export default GithubUserReposTable;