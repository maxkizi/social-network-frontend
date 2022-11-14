const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

const initialState = {
    users: []
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id)
                        u.followed = true
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id)
                        u.followed = false
                    return u
                })
            }

        case SET_USERS:
            const newState = {
                ...state,
                users: [...state.users, ...action.users]
            }
            return newState
        default:
            return state
    }
}

export const followActionCreator = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}

export const unfollowActionCreator = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export const setUsersActionCreator = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer