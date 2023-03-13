import {usersApi} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_FETCHING = 'SET_FETCHING'
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS'


const initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 0,
    isFetching: false,
    idsInProgress: []
}

const usersReducer = (state = initialState, action) => {
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
        case SET_FOLLOWING_PROGRESS: {
            return {
                ...state,
                idsInProgress: action.inProgress ? [...state.idsInProgress, action.userId]
                    : state.idsInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

const setUsers = (users) => {
    return {
        users: users,
        type: SET_USERS
    }
}

const setTotalUsersCount = (totalUsersCount) => {
    return {
        totalUsersCount: totalUsersCount,
        type: SET_TOTAL_USERS_COUNT
    }
}

const setFetching = (isFetching) => {
    return {
        isFetching: isFetching,
        type: SET_FETCHING
    }
}

const setFollowingProgress = (inProgress, userId) => {
    return {
        inProgress: inProgress,
        userId: userId,
        type: SET_FOLLOWING_PROGRESS
    }
}
const followSuccess = (userId) => {
    return {
        userId: userId,
        type: FOLLOW
    }
}

const unfollowSuccess = (userId) => {
    return {
        userId: userId,
        type: UNFOLLOW
    }
}

const setCurrentPage = (pageNumber) => {
    return {
        pageNumber: pageNumber,
        type: SET_CURRENT_PAGE
    }
}

export const getUsers = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setFetching(true))
        usersApi.getUsersRequest(pageNumber, pageSize).then(data => {
            dispatch(setCurrentPage(pageNumber))
            dispatch(setTotalUsersCount(data.totalElements))
            dispatch(setUsers(data.content))
            dispatch(setFetching(false))
        })
    }
}

export const follow = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, id))
        usersApi.followRequest(id).then(response => {
            dispatch(followSuccess(id))
            dispatch(setFollowingProgress(false, id))
        })
    }
}

export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, id))
        usersApi.unfollowRequest(id).then(response => {
            dispatch(unfollowSuccess(id))
            dispatch(setFollowingProgress(false, id))
        })
    }
}


export default usersReducer

