import React from 'react'
import PropTypes from 'prop-types'
import './register.css'
function Login(props) {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1 className="loginLogo">QTsocial</h1>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Useename" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Login into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {

}

export default Login

