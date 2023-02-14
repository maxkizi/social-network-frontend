const CHANGE_LOGIN = 'CHANGE_LOGIN'
const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
const SET_CURRENT_USER_ID = 'SET_CURRENT_USER_ID'
const SET_AUTH = 'SET_AUTH'


const initialState = {
    login: null,
    password: null,
    currentUserId: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state,
                login: action.login
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.password
            }
        case SET_CURRENT_USER_ID:
            return {
                ...state,
                currentUserId: action.currentUserId
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


export const changeLogin = (login) => {
    return {
        type: CHANGE_LOGIN,
        login
    }
}

export const changePassword = (password) => {
    return {
        type: CHANGE_PASSWORD,
        password
    }
}

export const setCurrentUserId = (currentUserId) => {
    return {
        type: SET_CURRENT_USER_ID,
        currentUserId
    }
}

export const setAuth = (isAuth) => {
    return {
        type: SET_AUTH,
        isAuth
    }
}
export default authReducer