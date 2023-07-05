import React from "react";
import {Field, reduxForm, reset} from "redux-form";

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field placeholder={'post text'} name={'text'} component={'input'}/>
            <button>Add post</button>
        </form>
    )
}

export default reduxForm({
    form: 'newPost',
    onSubmitSuccess: (result, dispatch) => {
        dispatch(reset('newPost'))
    }
})(PostForm)