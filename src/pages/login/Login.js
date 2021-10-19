import React , {useRef ,useContext} from 'react'
import PropTypes from 'prop-types'
import { loginCall } from '../../apis/userApis'
import { AuthContext } from '../../context/authContext'
import './login.css'
function Login(props) {
    const email = useRef()
    const password = useRef()
    const {user , isFeching , error , dispatch} = useContext(AuthContext)
    const handleSubmit= e => {
        e.preventDefault();
        console.log(email.current.value , password)
        loginCall({email : email.current.value , password : password.current.value} , dispatch)
    }
    console.log(user)
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
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Password" type="password" required className="loginInput" minLength="6" ref={password} />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
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

