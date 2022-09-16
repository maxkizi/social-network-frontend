import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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
        },
        sidebarState: {}
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        dialogReducer(action, this._state)
        profileReducer(action, this._state)
        this._rerenderEntireTree(this._state)
    },

    _rerenderEntireTree(state) {
        //stub
    }
}

export default store
