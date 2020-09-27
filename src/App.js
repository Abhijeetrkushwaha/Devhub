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
import Chat from './components/Chat';
import Loader from './components/Loader'

function App() {

  const [user, setUser] = useState(null);
  const [waitToLoad, setWaitToLoad] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [waitSignal, setWaitSignal] = useState('');

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
  }, [user]);

// console.log(user && user.uid);
  return (
    <BrowserRouter>
       {
         waitToLoad ? (
          <div className="App">
          <Nav user={user} />
          <Switch>
            {/* <Route exact path='/' user={date} component={Dashboard} /> */}
            <Route exact path='/' render=
            { (props) => <Dashboard {...props} user={user} />} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/create' component={CreateProject} />
            <Route path='/profile' component={Profile} />
            <Route path='/chat' component={Chat} />
          </Switch>
          </div>
         ) : (
          <Loader />
         )
       } 
       {/* <button onClick={() => setAuth(true)}>Click me</button> */}
    </BrowserRouter>
  );
}

export default App;
