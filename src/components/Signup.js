import React, { useState } from 'react';
import { auth } from '../firebase';

function Signup(props) {
    // console.log(props);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [waitSignal, setWaitSignal] = useState('');

    const signUp = (e) => {
        // console.log(props.history);
        e.preventDefault()
          setWaitSignal('just a second....')
            auth.createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            setEmail('')
            setPassword('')
            setUsername('')
            setWaitSignal('')
            return (
                authUser.user.updateProfile({
                    displayName: username,
                  })
            )
          }).then(() => props.history.push('/'))
          .catch((err) => {
            setWaitSignal(err.message)
          })
          
      }

    return (
        <div className="container">
            <form onSubmit={() =>  {}} className="white form z-depth-1">
                <h5 className="grey-text text-darken-3 center">
                    Signup
                </h5>
                <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="social-link">Social Link (optional)</label>
                    <input type="text" id="social-link" onChange={() => {}}/>
                    <p className="grey-text">Let us know any social media link so everyone can connect with you.</p>
                </div>
                <div className="center">
                <p className="red-text">{waitSignal}</p>
                </div>
                <div className="input-field">
                    <button className="btn purple" onClick={signUp}>Signup</button>
                </div>
            </form>
        </div>
    )
}

export default Signup
