const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
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
        newPostText: ''
}

const profileReducer = (state = initial_state, action) => {
    let newState = {...state}
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                postId: postId++,
                postText: state.newPostText
            }
            newState.posts = [...state.posts]
            newState.posts.push(newPost)
            newState.newPostText = ''
            return newState
        case UPDATE_NEW_POST_TEXT:
            newState.newPostText = action.newPostText
            return newState
        default:
            return newState
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