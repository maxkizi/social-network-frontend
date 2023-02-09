import Dialogs from "./Dialogs";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsState.dialogs,
        messages: state.dialogsState.messages,
        newMessageText: state.dialogsState.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addNewMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer