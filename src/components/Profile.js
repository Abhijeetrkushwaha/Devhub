import React from 'react';
import { Redirect } from 'react-router-dom'

function Profile({ user }) {
    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="container">
            <div className="section center">
                <div className="card profile-detail z-depth-0">
                    <h4 className="purple-text">Profile</h4>
                    <div className="avatar">
                        <h2 className="avatar-name">
                            {user.displayName.slice(0, 1)}
                        </h2>
                    </div>
                    <h5 className="username">{user.displayName}</h5>
                    
                </div>
            </div>
            <div className="section project-done">
                <h4 >Projects</h4>
                <div className="card">
                    <div className="card-content project-done-no">
                        <div className="card-title">Project 1</div>
                        <button className="btn purple">View</button>
                    </div>
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

export default Profile
