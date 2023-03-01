import s from "./User.module.css"
import userAvatar from "../../../assets/images/userAvatar.jpg"
import {NavLink} from "react-router-dom";
import axios from "axios";

const User = (props) => {
    const follow = () => {
        const requestConfig = {
            withCredentials: true
        }
        axios.post("http://localhost:8080/api/v1/follow/" + props.id, null, requestConfig)
            .then(response => {
                props.follow(props.id)
            })

    }
    const unfollow = () => {
        const requestConfig = {
            withCredentials: true
        }
        axios.delete("http://localhost:8080/api/v1/follow/" + props.id, requestConfig)
            .then(response => {
                props.unfollow(props.id)
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
                {props.isFollow ? <button onClick={unfollow}>unfollow</button> :
                    <button onClick={follow}>follow</button>}
            </div>
        </div>
    )
}

export default User