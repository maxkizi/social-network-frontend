import {
    follow,
    setCurrentPage,
    setFetching,
    setFollowingProgress,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";
import {usersApi} from "../../api/api";

class UsersRestClientContainer extends React.Component {

    __loadUsers = (pageNumber) => {
        this.props.setFetching(true)
        usersApi.getUsersRequest(pageNumber, this.props.pageSize).then(data => {
            this.props.setTotalUsersCount(data.totalElements)
            this.props.setUsers(data.content)
            this.props.setFetching(false)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.__loadUsers(pageNumber)
    }

    render = () => {
        return (
            <div>
                <Users {...this.props}
                       onPageChange={this.onPageChange}/>
            </div>
        )
    }

    componentDidMount() {
        this.__loadUsers(1)
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        totalUsersCount: state.usersState.totalUsersCount,
        currentPage: state.usersState.currentPage,
        pageSize: state.usersState.pageSize,
        isFetching: state.usersState.isFetching,
        idsInProgress: state.usersState.idsInProgress
    }
}

const mapDispatchToProps = {
    setUsers,
    follow,
    unfollow,
    setTotalUsersCount,
    setCurrentPage,
    setFetching,
    setFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRestClientContainer)