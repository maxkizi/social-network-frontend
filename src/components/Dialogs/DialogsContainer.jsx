import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
    const store = props.store
    const state = store.getState()

    const updateNewMessageText = (text) => {
        store.dispatch(updateNewMessageTextActionCreator(text))
    }

    const addNewMessage = () => {
        store.dispatch(addNewMessageActionCreator())
    }
    return (
        <Dialogs updateNewMessageText={updateNewMessageText}
                 addNewMessage={addNewMessage}
                 dialogs={state.dialogsState.dialogs}
                 messages={state.dialogsState.messages}
                 newMessageText={state.dialogsState.newMessageText}/>
    )
}

export default DialogsContainer