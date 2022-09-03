let postData = [
    {
        postId: 1,
        postText: 'My first post'
    },
    {
        postId: 2,
        postText: 'My second post'
    }
]

let dialogData = [
    {
        dialogId: 1,
        dialogName: 'Dima'
    },
    {
        dialogId: 2,
        dialogName: 'Sveta'
    },
    {
        dialogId: 3,
        dialogName: 'Anna'
    },
    {
        dialogId: 4,
        dialogName: 'Pavel'
    }
]

let messageData = [
    {
        messageId: 1,
        messageText: 'Hello!'
    },
    {
        messageId: 2,
        messageText: 'How are you?'
    },
]


let store = {
    _state: {
        profileState: {
            posts: postData,
            newPostText: ''
        },
        dialogsState: {
            dialogs: dialogData,
            messages: messageData
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST':
                this._addPost()
                break
            case 'UPDATE_NEW_POST_TEXT':
                this._updateNewPostText(action.newPostText)
                break
            default:
                throw Error
        }
    },

    _rerenderEntireTree() {
        //stub
    },
    _addPost() {
        let count = 3
        let newPost = {
            postId: count++,
            postText: this._state.profileState.newPostText
        }
        this._state.profileState.posts.push(newPost)
        this._state.profileState.newPostText = ''
        this._rerenderEntireTree(this._state)
    },
    _updateNewPostText(newPostText) {
        this._state.profileState.newPostText = newPostText
        this._rerenderEntireTree(this._state)
    }
}

export default store