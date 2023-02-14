import {
    follow,
    setCurrentPage, setFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from "../../redux/users-reducer";
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

        const requestConfig = {
            withCredentials: true
        }

        this.props.setFetching(true)
        axios.get(baseUrl + "?" + searchParams.toString(), requestConfig).then(response => {
            this.props.setTotalUsersCount(response.data.totalElements)
            this.props.setUsers(response.data.content)
            this.props.setFetching(false)
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
                       unfollow={this.props.unfollow}
                       isFetching={this.props.isFetching}/>
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
        pageSize: state.usersState.pageSize,
        isFetching: state.usersState.isFetching
    }
}

const mapDispatchToProps = {
    setUsers,
    follow,
    unfollow,
    setTotalUsersCount,
    setCurrentPage,
    setFetching
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersRestClientContainer)