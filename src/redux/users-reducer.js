const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE_ACTION_CREATOR = 'SET_CURRENT_PAGE_ACTION_CREATOR'
const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1
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
            return {
                ...state,
                users: [...action.users]
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE_ACTION_CREATOR:
            return {
                ...state,
                currentPage: action.pageNumber
            }
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

export const setTotalUsersCountActionCreator = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}

export const setCurrentPageActionCreator = (pageNumber) => {
    return {
        type: SET_CURRENT_PAGE_ACTION_CREATOR,
        pageNumber: pageNumber
    }
}

export default usersReducer