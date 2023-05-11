import {connect} from "react-redux";
import ProfileSettings from "./ProfileSettings";
import {signOut} from "../../../redux/auth-reducer";
import {withAuthRedirect} from "../../Hoc/wihtAuthRedirect";
import {compose} from "redux";

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
export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(ProfileSettingsRestContainer)