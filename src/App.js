import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard'

function App() {

  const [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
       <Nav auth={auth} />
       <Switch>
         <Route path='/' component={Dashboard} />
       </Switch>
       {/* <button onClick={() => setAuth(true)}>Click me</button> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
