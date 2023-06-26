import {Navigate} from "react-router-dom";
import LoginForm from "./LoginForm";

const Login = (props) => {
    const signIn = (formData) => {
        props.signIn(formData)
    }

    if (props.isAuth) {
        return (
            <Navigate to={'/myprofile'}/>
        )
    }

    return <LoginForm onSubmit={signIn}/>
}

export default Login