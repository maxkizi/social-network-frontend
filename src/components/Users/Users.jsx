import s from "./Users.module.css";
import React from "react";
import User from "./User/User";
import Preloader from "../Common/Preloader";

const Users = (props) => {
    const getTotalPageNums = () => {
        let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
        let result = []
        for (let i = 1; i <= pageCount; i++) {
            result.push(
                <span onClick={() => {props.onPageChange(i)}} className={i === props.currentPage ? s.selectedPageNumber : s.pageNumber}>{i}</span>
            )
        }
        return result
    }
    const mapUsersToJsx = () => {
        return props.users.map(u => <User id={u.id}
                                          userPhotoUrl={u.userPhotoUrl}
                                          firstName={u.firstName}
                                          lastName={u.lastName}
                                          country={u.country}
                                          isFollow={u.isFollow}
                                          follow={props.follow}
                                          unfollow={props.unfollow}/>)
    }
    return (
        <div>
            <div>
                {props.isFetching ? <Preloader/> : null}
            </div>
            <div>
                {getTotalPageNums()}
            </div>

            <div className={s.users}>
                {mapUsersToJsx()}
            </div>

        </div>
    )
}

export default Users