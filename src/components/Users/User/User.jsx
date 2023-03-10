import s from "./User.module.css"
import userAvatar from "../../../assets/images/userAvatar.jpg"
import {NavLink} from "react-router-dom";
import {usersApi} from "../../../api/api";

const User = (props) => {
    const follow = () => {
        props.setFollowingProgress(true, props.id)
        usersApi.followRequest(props.id).then(response => {
            props.follow(props.id)
            props.setFollowingProgress(false, props.id)
        })
    }
    const unfollow = () => {
        props.setFollowingProgress(true, props.id)
        usersApi.unfollowRequest(props.id).then(response => {
            props.unfollow(props.id)
            props.setFollowingProgress(false, props.id)
        })
    }
    return (
        <div className={s.item}>
            <div>
                <NavLink to={'/profile/' + props.id}>
                    <img src={props.userPhotoUrl != null ? props.userPhotoUrl : userAvatar} className={s.avatar}/>
                </NavLink>
            </div>
            <div>
                First name: {props.firstName}
            </div>
            <div>
                Last name: {props.lastName}
            </div>
            <div>
                Country: {props.country}
            </div>
            <div>
                {props.isFollow ?
                    <button disabled={props.idsInProgress.some(id => id === props.id)} onClick={unfollow}>unfollow</button> :
                    <button disabled={props.idsInProgress.some(id => id === props.id)} onClick={follow}>follow</button>}
            </div>
        </div>
    )
}

export default User