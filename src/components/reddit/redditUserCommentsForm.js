import React from 'react';

const RedditUserCommentsForm = ({onChange, onSubmit, errors}) => {
    return(
        <form>
            <p>Enter a Reddit username.</p>
            <input type="text" name="username" className="form-control" onChange={onChange} placeholder="Username" />
            <input type="submit" value="Submit" className="btn btn-primary" onClick={onSubmit}/>
        </form>
    );
};

export default RedditUserCommentsForm;