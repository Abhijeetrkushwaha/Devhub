import React from 'react'

function Signup() {

    return (
        <div className="container">
            <form onSubmit={() =>  {}} className="white form z-depth-1">
                <h5 className="grey-text text-darken-3 center">
                    Signup
                </h5>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <label htmlFor="social-link">Social Link (optional)</label>
                    <input type="text" id="social-link" onChange={() => {}}/>
                    <p className="grey-text">Let us know any social media link so everyone can connect with you.</p>
                </div>
                <div className="input-field">
                    <button className="btn purple">Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
