import {changeLogin, changePassword, signIn} from "../../redux/auth-reducer";
import Login from "./Login";
import {connect} from "react-redux";


const LoginRestContainer = (props) => {
    const signIn = () => {
        const data = {
            username: props.login,
            password: props.password
        }

        props.signIn(data)
    }

    return (
        <Login signIn={signIn}
               login={props.login}
               password={props.password}
               setLoginValue={props.changeLogin}
               setPasswordValue={props.changePassword}/>
    )
}


const mapStateToProps = (state) => {
    return {
        login: state.authState.login,
        password: state.authState.password
    }

}

const mapDispatchToProps = {
    changeLogin,
    changePassword,
    signIn
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginRestContainer)