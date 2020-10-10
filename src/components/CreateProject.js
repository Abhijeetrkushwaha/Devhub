import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { storage, db } from "../firebase";
import firebase from "firebase";

function CreateProject({ user, history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [progress, setProgress] = useState(0);
  const [image, setImage] = useState(null);
  const [waitSignal, setWaitSignal] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    let randomNo = Math.random();
    if (image && content && title && projectLink) {
      setWaitSignal("Just a second project is uploading");
      const uploadTask = storage.ref(`images/${randomNo}`).put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // progress function...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (err) => {
          // error function...
          console.log(err);
          alert(err.message);
        },
        () => {
          // complete function...
          storage
            .ref("images")
            .child(`${randomNo}`)
            .getDownloadURL()
            .then((url) => {
              db.collection("projects").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username: user.displayName,
                userId: user.uid,
                title: title,
                content: content,
                imageUrl: url,
                projectLink: projectLink,
                getInTouch: user.photoURL,
              });
              db.collection('notifications').add({
                text: `${user.displayName} just created a project`,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              })
              setProgress(0);
              setTitle("");
              setContent("");
              setProjectLink("");
              setImage(null);
              setWaitSignal("");
              history.push("/");
            });
        }
      );
    } else {
      setWaitSignal("please fill all required fields");
    }
  };

  const userIsLogin = !user ? (
    <Redirect to="/signup" />
  ) : (
    <div className="container">
      <form onSubmit={handleUpload} className="white form z-depth-1">
        <h5 className="grey-text text-darken-3 center">Create Project</h5>
        <div className="input-field">
          <progress className="progress-bar" value={progress} max="100" />
        </div>
        <div className="red-text center">{waitSignal}</div>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            className="materialize-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <label htmlFor="social-link">
            Project Link (preview link or github link)
          </label>
          <input
            type="text"
            id="social-link"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </div>
        <div className="input-field">
          <p className="grey-text choose-pic">Choose a pic for your project:</p>
          <div className="file-field input-field">
            <div className="btn-small btn-style purple-text white">
              <span>Browse</span>
              <input type="file" onChange={handleChange} />
            </div>

            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                placeholder="Upload file"
              />
            </div>
          </div>
        </div>
        <div className="input-field">
          <button className="btn purple">Create</button>
        </div>
      </form>
    </div>
  );
  return <div>{userIsLogin}</div>;
}

export default CreateProject;
