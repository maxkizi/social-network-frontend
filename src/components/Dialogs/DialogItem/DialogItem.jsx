import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.dialogId}`

    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.dialogName}</NavLink>
        </div>
    )
}

export default DialogItem