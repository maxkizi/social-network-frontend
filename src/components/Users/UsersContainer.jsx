import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    debugger
    return {
        users: state.usersState.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followActionCreator(id))
        },

        unfollow: (id) => {
            dispatch(unfollowActionCreator(id))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer