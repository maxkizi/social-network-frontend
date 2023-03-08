import {connect} from "react-redux";
import ProfileSettings from "./ProfileSettings";
import {setAuth} from "../../../redux/auth-reducer";
import {authApi} from "../../../api/api";

const ProfileSettingsRestContainer = (props) => {
    const signOut = () => {
        authApi.logoutRequest().then(response => {
            props.setAuth(false)
        })
    }

    return (
        <ProfileSettings signOut={signOut}
                         username={props.username}/>
    )
}

const mapStateToProps = (state) => {
    return {
        username: state.authState.login
    }
}

const mapDispatchToProps = {
    setAuth
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsRestContainer)