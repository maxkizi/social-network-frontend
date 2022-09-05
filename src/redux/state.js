const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'


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
            messages: messageData,
            newMessageText: ''
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
            case ADD_POST:
                this._addPost()
                break
            case UPDATE_NEW_POST_TEXT:
                this._updateNewPostText(action.newPostText)
                break
            case UPDATE_NEW_MESSAGE_TEXT:
                this._updateNewMessageText(action.newMessageText)
                break
            case ADD_NEW_MESSAGE:
                this._addMessage()
                break
            default:
                throw Error('action not defined')
        }
    },

    _rerenderEntireTree(state) {
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
    },

    _addMessage() {
        let idCounter = 3
        let newMessage = {
            messageId: idCounter++,
            messageText: this._state.dialogsState.newMessageText
        }
        this._state.dialogsState.messages.push(newMessage)
        this._state.dialogsState.newMessageText = ''
        debugger
        this._rerenderEntireTree(this._state)
    },
    _updateNewMessageText(newMessageText) {
        this._state.dialogsState.newMessageText = newMessageText
        this._rerenderEntireTree(this._state)
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

export const addNewMessageActionCreator = () => {
    return {
        type: ADD_NEW_MESSAGE
    }

}

export const updateNewMessageTextActionCreator = (newMessageText) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessageText
    }
}

export default store