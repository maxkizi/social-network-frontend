import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogElements = props.dialogsState.dialogs.map(dialog => <DialogItem dialogId={dialog.dialogId} dialogName={dialog.dialogName}/>)

    let messageElements = props.dialogsState.messages.map(msg => <Message messageText={msg.messageText}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs