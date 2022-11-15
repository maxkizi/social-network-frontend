import User from "./User/User";
import axios from "axios"
import React from "react";
import s from "./Users.module.css"

class Users extends React.Component {

    __mapUsers() {
        return (
            this.props.users.map(u => <User id={u.id}
                                            name={u.name}
                                            followed={u.followed}
                                            status={u.status}
                                            location={u.location}
                                            follow={this.props.follow}
                                            unfollow={this.props.unfollow}/>)
        )
    }

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
        const totalPageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pageNums = []

        for (let i = 1; i < totalPageCount; i++) {
            pageNums.push(i)
        }


        return (
            <div>
                <div className={s.pageNumbers}>
                    {
                        pageNums.map(pageNumber => {
                            return <span
                                className={pageNumber === this.props.currentPage ? s.activePageNumber : s.pageNumber}
                                onClick={() => {this.onPageChange(pageNumber)}}>
                                {pageNumber} </span>
                        })
                    }
                </div>
                <div>
                    {this.__mapUsers()}
                </div>
            </div>
        )
    }
}


export default Users