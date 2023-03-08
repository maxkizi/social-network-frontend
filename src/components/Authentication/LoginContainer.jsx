import {changeLogin, changePassword, setAuth, setCurrentUserId} from "../../redux/auth-reducer";
import Login from "./Login";
import {connect} from "react-redux";
import {authApi} from "../../api/api";


const LoginRestContainer = (props) => {
    const signIn = () => {
        const data = {
            username: props.login,
            password: props.password
        }

        authApi.loginRequest(data).then(response => {
            const id = response.data.id
            if (id) {
                props.setCurrentUserId(response.data.id)
                props.setAuth(true)
            }
        })
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
    setCurrentUserId,
    setAuth
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginRestContainer)