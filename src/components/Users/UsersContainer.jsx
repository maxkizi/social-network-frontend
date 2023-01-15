import {
    followActionCreator,
    setCurrentPageActionCreator,
    setTotalUsersCountActionCreator,
    setUsersActionCreator,
    unfollowActionCreator
} from "../../redux/users-reduser";
import {connect} from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";

class UsersRestClientContainer extends React.Component {
    __sendRequest = (pageNumber) => {
        let baseUrl = "http://localhost:8080/api/v1/users"
        const searchParams = new URLSearchParams();
        searchParams.append("size", this.props.pageSize)
        searchParams.append("page", (pageNumber - 1).toString())

        axios.get(baseUrl + "?" + searchParams.toString()).then(response => {
            this.props.setTotalUsersCount(response.data.totalElements)
            this.props.setUsers(response.data.content)
        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.__sendRequest(pageNumber)
    }


    render = () => {
        return (
            <div>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       onPageChange={this.onPageChange}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}/>
            </div>
        )
    }

    componentDidMount() {
        this.__sendRequest()
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersState.users,
        totalUsersCount: state.usersState.totalUsersCount,
        currentPage: state.usersState.currentPage,
        pageSize: state.usersState.pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        follow: (id) => {
            dispatch(followActionCreator(id))
        },
        unfollow: (id) => {
            dispatch(unfollowActionCreator(id))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountActionCreator(totalUsersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRestClientContainer)