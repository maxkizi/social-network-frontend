import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrpBmM6ceQxSCtr9Ah9QdJN2GsMxU0g9slCgItZTy&s'/>
            <div className={s.loginBlock}>
                {props.isAuth ? <NavLink to={'/myprofile/settings'}>{props.currentUsername}</NavLink> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header