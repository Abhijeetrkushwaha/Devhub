import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { db, auth } from './firebase';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import CreateProject from './components/CreateProject';
import Profile from './components/Profile';
import Chat from './components/Chat'

function App() {

  const [authentication, setAuthentication] = useState(true);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [waitToLoad, setWaitToLoad] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user is logged in...
        // console.log(authUser);
        setUser(authUser);
        setWaitToLoad(true)

      } else {
        // user is logged out...
        setUser(null)
        setWaitToLoad(true)
      }
    })

    return () => {
      // perform some cleanup activity
      unsubscribe()
    }
  }, [user, username]);

  return (
    <BrowserRouter>
      <div className="App">
       {
         waitToLoad && <Nav user={user} />
       }
       <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/login' component={Login} />
         <Route path='/signup' component={Signup} />
         <Route path='/create' component={CreateProject} />
         <Route path='/profile' component={Profile} />
         <Route path='/chat' component={Chat} />
       </Switch>
       {/* <button onClick={() => setAuth(true)}>Click me</button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
