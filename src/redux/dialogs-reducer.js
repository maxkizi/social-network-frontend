const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
let idCounter = 3

let initialState = {
        dialogs: [
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
        ],
        messages: [
            {
                messageId: 1,
                messageText: 'Hello!'
            },
            {
                messageId: 2,
                messageText: 'How are you?'
            },
        ],
        newMessageText: ''
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                messageId: idCounter++,
                messageText: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText
            return state
        default:
            return state
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

export default dialogReducer