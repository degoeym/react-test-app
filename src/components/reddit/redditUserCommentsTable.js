import React from 'react';

const RedditCommentsTable = ({comments}) => {
    let rows = comments.map(child => {
        var comment = child.data;
        return (
            <tr key={comment.id}>
                <td>{comment.body}</td>
                <td>
                    <a href={`https://www.reddit.com/r/${comment.subreddit}`}>{comment.subreddit_name_prefixed}</a>
                </td>
                <td>{comment.score}</td>
                <td>
                    <a href={comment.link_permalink} target="_blank">Direct Link</a>
                </td>
            </tr>
        );
    });
    
    return (
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Comment</th>
                    <th>Subreddit</th>
                    <th>Score</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
};

export default RedditCommentsTable;