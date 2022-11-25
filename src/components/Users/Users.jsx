import s from "./Users.module.css"
import User from "./User/User";
import React from "react";

const Users = (props) => {

    const totalPageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pageNums = []

    for (let i = 1; i < totalPageCount; i++) {
        pageNums.push(i)
    }

    const mapUsers = () => {
        return (
            props.users.map(u => <User id={u.id}
                                       name={u.name}
                                       followed={u.followed}
                                       status={u.status}
                                       location={u.location}
                                       follow={props.follow}
                                       unfollow={props.unfollow}/>)
        )
    }
    return (
        <div>
            <div className={s.pageNumbers}>
                {
                    pageNums.map(pageNumber => {
                        return <span
                            className={pageNumber === props.currentPage ? s.activePageNumber : s.pageNumber}
                            onClick={() => {
                                props.onPageChange(pageNumber)
                            }}>{pageNumber} </span>
                    })
                }
            </div>
            <div>
                {mapUsers()}
            </div>
        </div>)
}

export default Users