import React, { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import './components/Auth/Auth'
import Signup from './components/Auth/Signup';
import Auth from './components/Auth/Auth'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Destinations from './components/Destinations/Destinations'

function App() {
  const [sessionToken, setSessionToken] = useState('')
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
      console.log(localStorage.getItem('token'));
    }
  }, [])

  console.log(sessionToken)

  const updateToken = (newToken) => {
    localStorage.getItem('token', newToken);
    setSessionToken('newToken')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Auth updateToken={updateToken} />
          </Route>
          <Route exact path="/login">
            <Login sessionToken={sessionToken} updateToken={updateToken} />
          </Route>
          <Route exact path="/signup">
            <Signup updateToken={updateToken} />
          </Route>
          <Route exact path="/navbar">
            <Navbar />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/destination">
            <Destinations />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
