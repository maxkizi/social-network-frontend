import s from "./User.module.css"
import userAvatar from "../../../assets/images/userAvatar.jpg"

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
                <img src={props.userPhotoUrl != null ? props.userPhotoUrl : userAvatar} className={s.avatar}/>
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
                {props.followed ? <button onClick={unfollow}>unfollow</button> :
                    <button onClick={follow}>follow</button>}
            </div>
        </div>
    )
}

export default User