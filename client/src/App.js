import React from 'react'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Register from './components/register/Register'
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

// import {Person} from "@material-ui/icons";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/register' element = {<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App