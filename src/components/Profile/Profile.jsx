import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.mainImage}
                     src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU'/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile