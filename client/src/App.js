import React from 'react'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Register from './components/register/Register'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
// import {Person} from "@material-ui/icons";
function App() {
  return (
    <Router>
        <Route path="/">
          <Home/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/profile/:username">
          <Profile/>
        </Route>
    </Router>
  )
}

export default App