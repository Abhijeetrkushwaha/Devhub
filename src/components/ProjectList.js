import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chat from '../images/chatapp.png';
import { db } from '../firebase'

const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        db.collection('projects')
        // .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>{
            setProjects(snapshot.docs.map(doc => (
              {project: doc.data(), id: doc.id}
            )))
        })
      }, [] )

    //   console.log(projects);

      const projectLists = projects.map(({ project, id}) => {
          return (
            <div className="section" key={id}>
            <div className="card z-depth-1 project-summary">
                <div className="user-info">
                    <div className="user-detail">
                        <Avatar className="info__img" alt={project.username} src='/img' />
                        <p className="username">{project.username}</p>
                    </div>
                    <p className="grey-text">24th September, 10am</p>
                </div>
                <div className="post__image">
                    <img src={Chat} alt="Technical issue or slow net speed"/> 
                </div>
                    <div className="card-content project-content grey-text text-darken-3">
                        <span className="card-title">{project.title}</span>
                        <button className="btn-small purple">View</button>
                    </div>
                </div>
            </div>
          )
      })

    return (
        <div>
            {projectLists}
        </div>
    )
}

export default ProjectList