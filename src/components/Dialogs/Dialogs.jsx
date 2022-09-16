import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {


    let dialogElements = props.dialogsState.dialogs.map(dialog => <DialogItem dialogId={dialog.dialogId}
                                                                              dialogName={dialog.dialogName}/>)

    let messageElements = props.dialogsState.messages.map(msg => <Message messageText={msg.messageText}/>)

    let onUpdateNewMessageText = (e) => {
        let newMessageText = e.target.value
        props.dispatch(updateNewMessageTextActionCreator(newMessageText))
    }

    let onAddNewMessage = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <div>
                <textarea onChange={onUpdateNewMessageText} value={props.dialogsState.newMessageText}
                          placeholder='Enter new message text'/>
            </div>
            <div>
                <button onClick={onAddNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs