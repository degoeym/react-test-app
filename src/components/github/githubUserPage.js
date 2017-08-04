import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as githubActions from '../../actions/githubApiActions';
import GithubUserForm from './githubUserForm';
import GithubUserDetails from './githubUserDetails';

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
        debugger;
        return (
            <div>
                <GithubUserForm onChange={this.handleChange} 
                    onSubmit={this.getUserDetails} errors={this.state.errors} />
                <br/>
                {this.props.userDetails && this.props.userRepos.length > 0 && 
                    <GithubUserDetails user={this.props.userDetails} 
                        repos={this.props.userRepos} />}
            </div>
        );
    }
}

function mapStateToProps(state, ownState) {
    debugger;
    return {
        userDetails: state.githubApi.userDetails.userDetails,
        userRepos: state.githubApi.userRepos
    };
}

function mapDispatchToProps(dispatch) {
    debugger;
    return {
        actions: bindActionCreators(githubActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (GithubUserPage);