import React from 'react'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Register from './components/register/Register'
import Home from './pages/home/Home'
import Messenger from './pages/messenger/Messenger'
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
        <Route path='/messenger' element = {<Messenger/>}/>
      </Routes>
    </Router>
  )
}

export default App