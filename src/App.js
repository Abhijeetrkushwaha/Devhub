import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {

  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
       <Nav auth={auth} />
       <Switch>
         <Route exact path='/' component={Dashboard} />
         <Route path='/login' component={Login} />
         <Route path='/signup' component={Signup} />
       </Switch>
       {/* <button onClick={() => setAuth(true)}>Click me</button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
