import {Navigate} from "react-router-dom";

const Login = (props) => {

    const changeLogin = (e) => {
        let newLoginValue = e.target.value
        props.setLoginValue(newLoginValue)
    }

    const changePassword = (e) => {
        let newPasswordValue = e.target.value
        props.setPasswordValue(newPasswordValue)
    }

    const signIn = () => {
        props.signIn()
    }

    if (props.isAuth){
        return (
            <Navigate to={'/myprofile'}/>
        )
    }

    return (
        <div>
            <div>
                <textarea onChange={changeLogin} placeholder='login'/>
            </div>
            <div>
                <textarea onChange={changePassword} placeholder='password'></textarea>
            </div>
            <div>
                <button onClick={signIn}>sign in</button>
            </div>

        </div>
    )
}

export default Login