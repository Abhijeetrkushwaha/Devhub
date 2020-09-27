import React, { useState } from 'react';
import { auth } from '../firebase';
import { Link, Redirect } from 'react-router-dom'

function Signup(props) {
    // console.log(props);
    const { user } = props
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [link, setLink] = useState('');
    const [waitSignal, setWaitSignal] = useState('');

    const signUp = (e) => {
        // console.log(props.history);
        e.preventDefault()
          if(username.trim().length > 0 && link.trim().length > 0 ) {
            setWaitSignal('just a second....')
            auth.createUserWithEmailAndPassword(email, password)
          .then((authUser) => {
            setEmail('')
            setPassword('')
            setUsername('')
            setWaitSignal('')
            setLink('')
            return (
                authUser.user.updateProfile({
                    displayName: username,
                    photoURL: link,
                  })
            )
          }).then(() => props.history.push('/'))
          .catch((err) => {
            setWaitSignal(err.message)
          })
          } else {
              setWaitSignal("username or link field is empty")
          }
          
      }


      const userIsLogin = user ?   <Redirect to="/" /> : (
        <div className="container">
            <form onSubmit={signUp} className="white form z-depth-1">
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
                    <input type="text" id="social-link" value={link} onChange={(e) => setLink(e.target.value)}/>
                    <p className="grey-text">Let us know any social media link, so that everyone can connect with you.</p>
                </div>
                <div className="center">
                <p className="red-text">{waitSignal}</p>
                </div>
                <div className="input-field center">
                    <button className="btn purple">Signup</button>
                    <p className="center">Already a member? <span><Link to="/login" className="purple-text">Login</Link></span></p>
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

export default Signup
