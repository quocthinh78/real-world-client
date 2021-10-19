import UserContant from "./../contant/userContant"
import axios from 'axios'
export const loginCall =  async (userCredentials , dispatch) => {
    dispatch({type : UserContant.LOGIN_START});
    try {
        const res = await axios.post(`/auth/login` , userCredentials )
        dispatch({type : UserContant.LOGIN_SUCCESS , payload : res.data })
    } catch (error) {
        dispatch({type : UserContant.LOGIN_FAILURE , payload : error })
    }
}

