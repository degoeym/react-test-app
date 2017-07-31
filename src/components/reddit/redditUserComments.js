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
        this.props.actions.getUserComments(this.state.username)
    }

    render() {
        return (
            <RedditUserCommentsForm onChange={this.handleChange} onSubmit={this.getUserComments} errors={this.state.errors} />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        userComments: state.userComments
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(redditActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (RedditUserComments);