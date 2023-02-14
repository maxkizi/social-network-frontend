import {connect} from "react-redux";
import ProfileSettings from "./ProfileSettings";
import axios from "axios";
import {setAuth} from "../../../redux/auth-reducer";

const ProfileSettingsRestContainer = (props) => {
    const signOut = () => {
        const requestConfig = {
            withCredentials: true
        }
        axios.get('http://localhost:8080/logout', requestConfig).then(response => {
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