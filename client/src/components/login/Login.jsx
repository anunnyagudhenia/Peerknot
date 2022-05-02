
import React from 'react'
import "./login.css";

function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">PeerKnot</h3>
                <span className="loginDesc">A knot for the peers</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Roll No' className='loginInput' />
                    <input placeholder='Password' className='loginInput' />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login