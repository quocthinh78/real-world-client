import UserContant from "./../contant/userContant"

const AuthReducer = (state , action) => {
    switch(action.type) {
        case  UserContant.LOGIN_START : 
        return {
            user : null, 
            isFeching : true,
            error : null
        }
        case UserContant.LOGIN_SUCCESS : 
        return {
            user : action.payload, 
            isFeching : false,
            error : null
        }
        case  UserContant.LOGIN_FAILURE : 
        return {
            user : null, 
            isFeching : false,
            error : action.payload
        }

        default : return state
    }
}

export default AuthReducer