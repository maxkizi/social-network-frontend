import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {updateNewPostText, updateProfile} from "../../../redux/profile-reducer";


const mapStateToProps = (state) => {
    return {
        profileState: state.profileState,
        currentUserId: state.authState.currentUserId
    }
}

const mapDispatchToProps = {
    updateNewPostText,
    updateProfile
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer