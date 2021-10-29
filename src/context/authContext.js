import {Children, createContext , useReducer} from 'react'
import AuthReducer from './authReducer'
const INITIAL_STATE = {
    user : {
        "_id": "616d2c4be2680eb562bad99a",
        "username": "join",
        "email": "2@gmail.com",
        "password": "$2b$10$lHURPE5kKFx/ooy4q81ccO3rR8wUZdLelbGUv/0c3DG6gLp1IAvOy",
        "profilePicture": "/person/1.jpeg",
        "convertPicture": "",
        "followers": [],
        "followings": [
            "616d2c42e2680eb562bad998"
        ],
        "isAdmin": false,
        "createdAt": "2021-10-18T08:11:55.125Z",
        "updatedAt": "2021-10-18T15:55:19.666Z",
        "__v": 0,
        "city": "v__vietnam",
        "desc": "will try my best",
        "relationships": 2,
        "from": "phu yen"
    },
    isFeching : false,
    error : false
}
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(AuthReducer , INITIAL_STATE);
    return (
        <AuthContext.Provider value={{user: state.user , isFeching : state.isFeching , error : state.error , dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
