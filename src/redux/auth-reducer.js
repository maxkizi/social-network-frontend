import {authApi} from "../api/api";

const SET_CURRENT_USER = 'SET_CURRENT_USER'
const SET_AUTH = 'SET_AUTH'


const initialState = {
    login: null,
    password: null,
    currentUserId: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                currentUserId: action.id,
                login: action.username
            }
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }

}


const setCurrentUser = (currentUser) => {
    debugger
    return {
        type: SET_CURRENT_USER,
        id: currentUser.id,
        username: currentUser.username
    }
}

const setAuth = (isAuth) => {
    return {
        type: SET_AUTH,
        isAuth
    }
}

export const signIn = (data) => {
    return (dispatch) => {
        authApi.loginRequest(data).then(response => {
            debugger
            const data = response.data
            if (data) {
                dispatch(setCurrentUser(data))
                dispatch(setAuth(true))
            }
        })
    }
}

export const signOut = () => {
    return (dispatch) => {
        authApi.logoutRequest().then(response => {
            dispatch(setAuth(false))
            dispatch(setCurrentUser(null))
        })
    }
}

export default authReducer