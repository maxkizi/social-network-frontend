import {profileApi} from "../api/api";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'

let postId = 3

const initial_state = {
    posts: [
        {
            postId: 1,
            postText: 'My first post'
        },
        {
            postId: 2,
            postText: 'My second post'
        }
    ],
    newPostText: '',
    profileData: null
}

const profileReducer = (state = initial_state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postId: postId++,
                postText: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_CURRENT_PROFILE:
            return {
                ...state, profileData: action.profileData
            }
        default:
            return state
    }
}

const setProfileDataSuccess = (profileData) => {
    return {
        type: SET_CURRENT_PROFILE,
        profileData
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPostText: newText
    }
}

export const setProfileData = (id) => {
    return (dispatch) => {
        profileApi.getProfileRequest(id).then(data => {
            dispatch(setProfileDataSuccess(data))
        })
    }
}


export default profileReducer