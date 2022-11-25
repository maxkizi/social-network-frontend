import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";


class UsersApiComponent extends React.Component {


    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`http://localhost:8080/api/v1/users?page=${pageNumber}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUserCount(response.data.totalElements)
                this.props.setUsers(response.data.content)
            });
    }


    componentDidMount = () => {
        axios.get(`http://localhost:8080/api/v1/users?page=${this.props.currentPage}&size=${this.props.pageSize}`)
            .then(response => {
                this.props.setTotalUserCount(response.data.totalElements)
                this.props.setUsers(response.data.content)
            });
    }

    render = () => {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChange={this.onPageChange}
                      users={this.props.users}/>
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent)
