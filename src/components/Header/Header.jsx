import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import React from "react";


class Header extends React.Component {

    componentDidMount() {
        this.props.me()
    }

    render = () => {
        return (
            <header className={s.header}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZrpBmM6ceQxSCtr9Ah9QdJN2GsMxU0g9slCgItZTy&s'/>
                <div className={s.loginBlock}>
                    {this.props.isAuth ?
                        <NavLink to={'/myprofile/settings'}>{this.props.currentUsername}</NavLink> : null}
                </div>
            </header>
        )
    }
}

export default Header