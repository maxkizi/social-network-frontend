import s from "./User.module.css"
import userAvatar from "../../../assets/images/userAvatar.jpg"
import {NavLink} from "react-router-dom";

const User = (props) => {
    const follow = () => {
        props.follow(props.id)
    }
    const unfollow = () => {
        props.unfollow(props.id)
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