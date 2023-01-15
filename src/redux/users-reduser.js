const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'


const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            let usersCopy = state.users.map(u => {
                debugger
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
            })
            return {
                ...state,
                users: usersCopy
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.pageNumber
            }
        default:
            return state
    }
}

export const followActionCreator = (userId) => {
    return {
        userId: userId,
        type: FOLLOW
    }
}

export const unfollowActionCreator = (userId) => {
    return {
        userId: userId,
        type: UNFOLLOW
    }
}

export const setUsersActionCreator = (users) => {
    return {
        users: users,
        type: SET_USERS
    }
}

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        totalUsersCount: totalUsersCount,
        type: SET_TOTAL_USERS_COUNT
    }
}

export const setCurrentPageActionCreator = (pageNumber) => {
    return {
        pageNumber: pageNumber,
        type: SET_CURRENT_PAGE
    }
}

export default usersReducer

