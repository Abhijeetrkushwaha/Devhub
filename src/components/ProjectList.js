import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chat from '../images/chatapp.png'

const ProjectList = () => {
    return (
        <div className=" section">
            <div className="card z-depth-1 project-summary">
                <div className="user-info">
                    <div className="user-detail">
                        <Avatar className="info__img" alt="Abhijeet" src='/img' />
                        <p className="username">Abhijeet Kushwaha</p>
                    </div>
                    <p className="grey-text">24th September, 10am</p>
                </div>
                <div className="post__image">
                    <img src={Chat} alt="Technical issue or slow net speed"/> 
            </div>
                <div className="card-content project-content grey-text text-darken-3">
                    <span className="card-title">Project Title</span>
                    <button className="btn purple">View</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectList