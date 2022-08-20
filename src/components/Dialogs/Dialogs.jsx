import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

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


    let dialogElements = dialogData.map(dialog => <DialogItem dialogId={dialog.dialogId}
                                                              dialogName={dialog.dialogName}/>)

    let messageElements = messageData.map(msg => <Message messageText={msg.messageText}/>)

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