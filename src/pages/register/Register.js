import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import './register.css'
import axios from 'axios'
import { useHistory } from "react-router"
function Login(props) {
    const history = useHistory()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const passwordAgain = useRef()
    const handleSubmit = e => {
        e.preventDefault();
        if (password.current.value !== passwordAgain.current.value) {
            passwordAgain.current.setCustomValidity('Password not match')
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                passwordAgain: passwordAgain.current.value
            }
            try {
                axios.post(`auth/register`, user)
                history.push('/login')
            } catch (error) {
                console.log(error)
            }
        }
    }
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
                    <form onSubmit={handleSubmit} className="loginBox">
                        <input placeholder="Useename" required className="loginInput" ref={username} />
                        <input placeholder="Email" type="email" required className className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" ref={password} />
                        <input placeholder="Password Again" type="password" required className="loginInput" ref={passwordAgain} />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">
                            Login into Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

Login.propTypes = {

}

export default Login

