import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as redditActions from '../../actions/redditApiActions';
import RedditUserCommentsForm from './redditUserCommentsForm';

class RedditUserComments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.getUserComments = this.getUserComments.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    getUserComments(event) {
        event.preventDefault();
        this.props.actions.getUserComments(this.state.username);
    }

    createCommentTable() {
        let rows = this.props.comments.map(child => {
            var comment = child.data;
            return (
                <tr>
                    <td>{comment.body}</td>
                    <td>{comment.subreddit}</td>
                    <td>{comment.score}</td>
                    <td>{comment.link_permalink}</td>
                </tr>
            );
        });
        
        return (
            <table className="table table-striped table-bordered">
                <thead>
                    <th>Comment</th>
                    <th>Subreddit</th>
                    <th>Score</th>
                    <th>Link</th>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

    render() {
        return (
            <div>
                <RedditUserCommentsForm onChange={this.handleChange} onSubmit={this.getUserComments} errors={this.state.errors} />
                {this.props.comments.length > 0 && this.createCommentTable()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        comments: state.reddit
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(redditActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (RedditUserComments);