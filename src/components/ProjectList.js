import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
// import Chat from "../images/chatapp.png";
import { Link } from "react-router-dom";
import { db } from "../firebase";
import moment from "moment";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [isLike, setIsLike] = useState(false)

  useEffect(() => {
    db.collection("projects")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setProjects(
          snapshot.docs.map((doc) => ({ project: doc.data(), id: doc.id }))
        );
      });

      // $('.dropdown-trigger').dropdown();
  }, []);

  //   console.log(projects);
  let handleLikeClick = () => {
    if(!isLike) {
      setIsLike(true)
    } else {
      setIsLike(false)
    }
    console.log(isLike);
  }

  const projectLists = projects.map(({ project, id }) => {
    return (
      <div className="section" key={id}>
        <div className="card z-depth-1 project-summary">
          <div className="user-info">
            <div className="user-detail">
              <Avatar className="info__img" alt={project.username} src="/img" />
              <p className="username">{project.username}</p>
            </div>
            <div>
              <i className="fas fa-ellipsis-v grey-text"></i>
            </div>
          </div>
          <div className="post__image">
            <img
              src={project.imageUrl}
              alt="Technical issue or slow net speed"
            />
          </div>
          <div className="card-content project-content grey-text text-darken-3">
            <span className="card-title black-text">{project.title}</span>
            <div className="like-info">
              <div className="likes">
                <div className={`like-btn ${isLike && 'like-active'}`} onClick={handleLikeClick}>
                  <i className="fas fa-heart"></i>
                </div>
                <div className="like-btn-no">1</div>
              </div>
              <Link to={"/project/" + id} className="btn-small purple">
                View
              </Link>
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div className="project-time">
              {project.timestamp &&
                moment(project.timestamp.toDate()).calendar()}
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <div>{projectLists}</div>;
};

export default ProjectList;
