import React from 'react';

const RedditSubmissionsTable = ({submissions}) => {
    debugger;
    let rows = submissions.map(child => {
        var submission = child.data;
        var date = new Date(submission.created_utc*1000).toDateString();
        return (
            <tr key={submission.id}>
                <td>
                    <a href={`https://www.reddit.com${submission.permalink}`} target="_blank">
                        {submission.title}</a>
                </td>
                <td>{submission.score}</td>
                <td>
                    <a href={`https://www.reddit.com/r/${submission.subreddit}`} target="_blank">
                        {submission.subreddit_name_prefixed}</a>
                </td>
                <td>{date}</td>
            </tr>
        );
    });

    return (
        <table className="table table-striped table-bordered table-responsive">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Score</th>
                    <th>Subreddit</th>
                    <th>Date Submitted</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default RedditSubmissionsTable;