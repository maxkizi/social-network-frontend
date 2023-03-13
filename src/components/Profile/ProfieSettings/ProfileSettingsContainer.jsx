import {connect} from "react-redux";
import ProfileSettings from "./ProfileSettings";
import {signOut} from "../../../redux/auth-reducer";

const ProfileSettingsRestContainer = (props) => {
    const signOut = () => {
        props.signOut()
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
    signOut
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettingsRestContainer)