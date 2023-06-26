import Login from "./Login";
import {connect} from "react-redux";
import {signIn} from "../../redux/auth-reducer";


const LoginRestContainer = (props) => {
    const signIn = (formData) => {
        const data = {
            username: formData.login,
            password: formData.password
        }
        props.signIn(data)
    }

    return (
        <Login signIn={signIn}
               isAuth={props.isAuth}/>
    )
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.authState.isAuth
    }

}

const mapDispatchToProps = {
    signIn
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginRestContainer)