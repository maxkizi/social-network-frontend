import s from "./User.module.css"

const User = (props) => {
    const follow = () => {
        props.follow(props.id)
    }

    const unfollow = () => {
        props.unfollow(props.id)
    }

    return (
        <div className={s.user}>
            <div>
                name: {props.name}
            </div>
            <div>
                status: {props.status}
            </div>
            <div>
                country: {props.location.country}
            </div>
            <div>
                city: {props.location.city}
            </div>
            <div>
                {props.followed?<button onClick={unfollow}>unfollow</button> : <button onClick={follow}>follow</button>}
            </div>
        </div>
    )
}

export default User