import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {updateProfile} from "../../../redux/profile-reducer";
import {withAuthRedirect} from "../../Hoc/wihtAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        profileState: state.profileState,
        currentUserId: state.authState.currentUserId
    }
}

const mapDispatchToProps = {
    updateProfile
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(MyPosts)