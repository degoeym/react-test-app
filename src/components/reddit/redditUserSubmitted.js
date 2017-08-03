import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as redditActions from '../../actions/redditApiActions';
import RedditUserForm from './redditUserForm';
import RedditSubmittedTable from './redditUserSubmittedTable';

class RedditUserSubmitted extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.getUserSubmitted = this.getUserSubmitted.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    getUserSubmitted(event) {
        event.preventDefault();
        this.props.actions.getUserSubmitted(this.state.username);
    }

    componentWillUnmount() {
        this.props.actions.unloadRedditSubmittedState();
    }

    render() {
        return(
            <div>
                <RedditUserForm onChange={this.handleChange} 
                    onSubmit={this.getUserSubmitted} errors={this.state.errors} />
                <br />
                {this.props.submissions !== undefined && this.props.submissions.length > 0 && <RedditSubmittedTable submissions={this.props.submissions} />}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        submissions: state.redditApi.userSubmissions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(redditActions, dispatch)
    };
}

export default  connect(mapStateToProps, mapDispatchToProps) (RedditUserSubmitted);