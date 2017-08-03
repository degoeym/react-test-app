import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from '../../actions/githubApiActions';
import GithubUserForm from './githubUserForm';

class GithubUserPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.getUserDetails = this.getUserDetails.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    getUserDetails(event) {
        event.preventDefault();
        this.props.actions.getUserDetails(this.state.username);
    }

    componentWillUnmount() {
        this.props.actions.unloadGithubUserState();
    }

    render() {
        return (
            <div>
                <GithubUserForm onChange={this.handleChange} 
                    onSubmit={this.getUserDetails} errors={this.state.errors} />
                <br/>
            </div>
        );
    }
}

function mapStateToProps(state, ownState) {
    return {
        userDetails: state.githubApi.userDetails,
        userRepos: state.githubApi.userRepos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (GithubUserPage);