const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_FETCHING = 'SET_FETCHING'


const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false
}

const usersReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case FOLLOW:
            let usersCopy = state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, isFollow: true}
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
                        return {...u, isFollow: false}
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
        case SET_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId) => {
    return {
        userId: userId,
        type: FOLLOW
    }
}

export const unfollow = (userId) => {
    return {
        userId: userId,
        type: UNFOLLOW
    }
}

export const setUsers = (users) => {
    return {
        users: users,
        type: SET_USERS
    }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return {
        totalUsersCount: totalUsersCount,
        type: SET_TOTAL_USERS_COUNT
    }
}

export const setCurrentPage = (pageNumber) => {
    return {
        pageNumber: pageNumber,
        type: SET_CURRENT_PAGE
    }
}

export const setFetching = (isFetching) => {
    return {
        isFetching: isFetching,
        type: SET_FETCHING
    }
}


export default usersReducer

