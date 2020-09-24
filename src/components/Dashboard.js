import React from 'react';
import Notification from './Notification';
import ProjectList from './ProjectList'

function Dashboard() {
    return (
        <div className="dashboard container">
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
}

export default Dashboard
