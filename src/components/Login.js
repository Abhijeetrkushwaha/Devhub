import React, { useState } from 'react';
import { auth } from '../firebase'

function Login(props) {
    const { user } = props;
    // console.log(user);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [waitSignal, setWaitSignal] = useState('');

    // if(user){
       
    // }
    

    const signIn = (e) => {
        e.preventDefault()
        setWaitSignal('just a second....')
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail('')
          setPassword('')
          setWaitSignal('')
          props.history.push('/')
        })
        .catch((err) => {
          setWaitSignal(err.message)
        })
      }

    return (
        <div className="container">
            <form onSubmit={signIn} className="white form z-depth-1">
                <h5 className="grey-text text-darken-3 center">
                    Login
                </h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <p className="red-text">{waitSignal}</p>
                <div className="input-field">
                    <button className="btn purple">Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
