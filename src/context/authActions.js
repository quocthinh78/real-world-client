import UserContant from "./../contant/userContant"


export const LoginStart = () => ({
    type : UserContant.LOGIN_START
})

export const LoginSuccess = (user) => ({
    type : UserContant.LoginSuccess,
    payload : user,
})

export const LoginFailure = (error) => ({
    type : UserContant.LoginFailure,
    payload : error
})

export {
    LoginStart,
LoginSuccess,
LoginFailure,
}