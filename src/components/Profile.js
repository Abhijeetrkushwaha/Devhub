import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { db } from '../firebase';

function Profile({ user }) { 

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    db.collection('projects')
    .onSnapshot(snapshot =>{
        setProjects(snapshot.docs.map(doc => (
          {project: doc.data(), id: doc.id}
          )))
      })
    }, [] )

    // console.log(projects);

    const mainProject = projects.length ? (
      projects.filter(project => {
          return project.project.userId === user.uid
      })
  ) : (null)

  // console.log(mainProject);
  const newProject = mainProject && mainProject.length ? (
    mainProject.map((project) => {
      return (
        <div className="card" key={project.id}>
        <div className="card-content project-done-no z-depth-1">
          <div className="card-title">Title: { project.project.title }</div>
        </div>
        
        </div>
      )
    })
  ) : (
    null
  )

    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="container">
            <div className="row">
            <div className="section center col s12 m12 l6">
                <div className="card profile-detail z-depth-1">
                    <h4 className="purple-text">Profile</h4>
                    <div className="avatar">
                        <h2 className="avatar-name">
                            {user.displayName.slice(0, 1)}
                        </h2>
                    </div>
                    <h5 className="username">{user.displayName}</h5>
                    <h6>Email: {user.email}</h6>
                </div>
            </div>
            <div className="section project-done col s12 m12 l6">
                <h4>Projects</h4>
                {
                  mainProject && mainProject.length === 0 ? (
                    <h3>Haven't created any project</h3>
                  ) : null
                }
                    
                    {
                       newProject
                    }
                        
                    
                
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
