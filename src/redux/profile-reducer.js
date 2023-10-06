import {profileApi} from "../rest/api";

const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE'
const CLEAR_NEW_POST_TEXT = 'CLEAR_NEW_POST_TEXT'


const initial_state = {
    newPostText: '',
    profileData: {posts: []}
}

const profileReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_CURRENT_PROFILE:
            return {
                ...state, profileData: action.profileData
            }
        case CLEAR_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: ''
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

const clearNewPostText = () => {
    return {
        type: CLEAR_NEW_POST_TEXT
    }
}

export const setProfileData = (id) => {
    return (dispatch) => {
        profileApi.getProfileRequest(id).then(data => {
            dispatch(setProfileDataSuccess(data))
        })
    }
}

export const updateProfile = (updatedProfileData) => {
    return (dispatch) => {
        profileApi.updateProfileRequest(updatedProfileData).then(data => {
            dispatch(setProfileDataSuccess(data))
            dispatch(clearNewPostText())
        })
    }
}

export default profileReducer