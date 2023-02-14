import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.dialogs.map(dialog => <DialogItem dialogId={dialog.dialogId}
                                                                 dialogName={dialog.dialogName}/>)

    let messageElements = props.messages.map(msg => <Message messageText={msg.messageText}/>)

    let onUpdateNewMessageText = (e) => {
        let newMessageText = e.target.value
        props.updateNewMessageText(newMessageText)
    }

    let onAddNewMessage = () => {
        props.addNewMessage()
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
                <textarea onChange={onUpdateNewMessageText} value={props.newMessageText}
                          placeholder='Enter new message text'/>
            </div>
            <div>
                <button onClick={onAddNewMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs