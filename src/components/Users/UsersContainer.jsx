import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator, setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        currentPage: state.usersState.currentPage,
        pageSize: state.usersState.pageSize,
        totalUsersCount: state.usersState.totalUsersCount
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
        },

        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUserCount))
        },

        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageActionCreator(pageNumber))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer