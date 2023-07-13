import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'} type={"password"}/>
            </div>
            <div>
                <button>sign in</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'login'})(LoginForm)