import React from 'react';
import Notification from './Notification';
import ProjectList from './ProjectList';
import { Redirect } from 'react-router-dom';
// import { auth } from '../firebase';

function Dashboard({ user }) {
    // console.log(user && user.uid);
    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="dashboard">
            <div className="row">
                <div className="col s12 m12 l6">
                    <ProjectList />
                    <ProjectList />
                </div>
                <div className="col s12 m12 l5 offset-l1">
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
