import React from 'react';

const GithubUserForm = ({onChange, onSubmit, errors}) => {
    return(
        <form className="form-inline">
            <p>Enter a GitHub username.</p>
            <div className="form-group">
                <input type="text" name="username" className="form-control" onChange={onChange} placeholder="Username" />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" onClick={onSubmit}/>
        </form>
    );
};

export default GithubUserForm;