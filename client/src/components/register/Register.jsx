import React from 'react'
import "./register.css";

function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">PeerKnot</h3>
                <span className="loginDesc">A knot for the peers</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Name' className='loginInput' />
                    <input placeholder='ERP' className='loginInput' />
                    <input placeholder='Roll No' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log In to Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register