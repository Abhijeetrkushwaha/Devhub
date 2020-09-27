import React from 'react';
import { Redirect } from 'react-router-dom'

function CreateProject({ user }) {

    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="container">
            <form onSubmit={() =>  {}} className="white form z-depth-1">
                <h5 className="grey-text text-darken-3 center">
                    Create Project
                </h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea" onChange={() => {}}></textarea>
                </div>
                <div className="input-field">
                    <label htmlFor="social-link">Project Link (preview link or github link)</label>
                    <input type="text" id="social-link" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <p className="grey-text">Choose a pic for your project:</p>
                    <input type="file" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <button className="btn purple">Create</button>
                </div>
            </form>
        </div>
    )
    return (
        <div>
            { userIsLogin }
        </div>
    )

}

export default CreateProject
