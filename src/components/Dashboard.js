import React from 'react';
import Notification from './Notification';
import ProjectList from './ProjectList';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'

function Dashboard({ user }) {
    // console.log(user && user.uid);
    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="dashboard p-top">
            <div className="welcome-greeting center">
                <h5><span className="purple-text">Welcome </span>{user.displayName}</h5>
                <Link to="/create" className="take-to-create">Create a project</Link>
            </div>
            <div className="row">
                <div className="col s12 m12 l6 no-mg">
                    <ProjectList />
                </div>
                <div className="col s12 m12 l5 offset-l1 hide-on-med-and-down">
                    <Notification />
                </div>
            </div>
        </div>
    )
    return (
        <div>
            { userIsLogin }
        </div>
    )
}

export default Dashboard
