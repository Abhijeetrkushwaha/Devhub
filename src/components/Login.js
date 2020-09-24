import React from 'react'

function Login() {

    return (
        <div className="container">
            <form onSubmit={() =>  {}} className="white form z-depth-1">
                <h5 className="grey-text text-darken-3 center">
                    Login
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={() => {}}/>
                </div>
                <div className="input-field">
                    <button className="btn purple">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
