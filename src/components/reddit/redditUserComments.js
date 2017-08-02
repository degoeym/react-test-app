import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as redditActions from '../../actions/redditApiActions';
import RedditUserCommentsForm from './redditUserCommentsForm';
import RedditCommentsTable from './redditUserCommentsTable';

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

    render() {
        return (
            <div>
                <RedditUserCommentsForm onChange={this.handleChange} 
                    onSubmit={this.getUserComments} errors={this.state.errors} />
                <br />
                {this.props.comments.length > 0 && <RedditCommentsTable comments={this.props.comments} />}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    //debugger;
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