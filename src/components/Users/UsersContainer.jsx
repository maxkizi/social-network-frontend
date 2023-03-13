import {follow, getUsers, unfollow} from "../../redux/users-reducer";
import {connect} from "react-redux";
import React from "react";
import Users from "./Users";

class UsersRestClientContainer extends React.Component {

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
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
    follow,
    unfollow,
    getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRestClientContainer)