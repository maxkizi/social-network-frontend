import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/myprofile' className={navData => navData.isActive ? s.activeLink : s.item}>My Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to='/news' className={navData => navData.isActive ? s.activeLink : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={navData => navData.isActive ? s.activeLink : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={navData => navData.isActive ? s.activeLink : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={navData => navData.isActive ? s.activeLink : s.item}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default NavBar