const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
let idCounter = 3

const dialogReducer = (action, state) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                messageId: idCounter++,
                messageText: state.dialogsState.newMessageText
            }
            state.dialogsState.messages.push(newMessage)
            state.dialogsState.newMessageText = ''
            break
        case UPDATE_NEW_MESSAGE_TEXT:
            state.dialogsState.newMessageText = action.newMessageText
            break
        default:
            return
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