import dialogReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


export let postData = [
    {
        postId: 1,
        postText: 'My first post'
    },
    {
        postId: 2,
        postText: 'My second post'
    }
]

export let dialogData = [
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

export let messageData = [
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
        this.state = dialogReducer(this._state.dialogsState, action)
        this.state = profileReducer(this._state.profileState, action)
        this.state = sidebarReducer(this._state.sidebarState, action)
        this._rerenderEntireTree(this._state)
    },

    _rerenderEntireTree(state) {
        //stub
    }
}

export default store
