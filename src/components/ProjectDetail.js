import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { db } from '../firebase';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment'


function ProjectDetail(props) {

    const { user } = props
    // console.log(props);
    console.log(user);

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        db.collection('projects')
        .onSnapshot(snapshot =>{
            setProjects(snapshot.docs.map(doc => (
              {project: doc.data(), id: doc.id}
            )))
        })
      }, [] )

      

    const mainProject = projects.length ? (
        projects.find(project => {
            return project.id === props.match.params.id
        })
    ) : (null)

    console.log(projects && mainProject);

    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="container">
            <div className="section project-detail">
            <div className="card z-depth-1 project-summary">
                <div className="user-info">
                    <div className="user-detail">
                        <Avatar className="info__img" alt={mainProject && mainProject.project.username} src='/img' />
                        <p className="username">{mainProject && mainProject.project.username}</p>
                    </div>
                    <p className="purple-text">Get in touch <span className="project-detail-get-touch">
                        
                        {mainProject && <a href={mainProject.project.getInTouch} target="blank" className="purple-text"><i className="fas fa-external-link-alt"></i></a>}
                    </span></p>
                </div>
                <div className="post__image">
                    <img src={mainProject && mainProject.project.imageUrl} alt="Technical issue or slow net speed"/> 
                </div>
                <div className="project-detail-content">
                <p className="grey-text right">{ mainProject && moment(mainProject.project.timestamp.toDate()).calendar()}</p>
                    <h6 className="project-detail-title">{mainProject && mainProject.project.title}</h6>
                    <p className="project-view">{mainProject && mainProject.project.content}</p>
                    {mainProject && <a href={mainProject.project.projectLink} target="blank"  className="btn purple">View</a>}
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

export default ProjectDetail
