const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
let postId = 3

const profileReducer = (action, state) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postId: postId++,
                postText: state.profileState.newPostText
            }
            state.profileState.posts.push(newPost)
            state.profileState.newPostText = ''
            break
        case UPDATE_NEW_POST_TEXT:
            state.profileState.newPostText = action.newPostText
            break
        default:
            return
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

export default profileReducer