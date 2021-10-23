import React from 'react';
import s from './Header.module.css';
import logo from "../../logo.svg"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to="/profile">
                <img src={logo}/>
            </NavLink>

            {props.isLogin? <div className={s.loginBlock}>
                {props.login}
            </div>
                :<NavLink to="/login">
                    <div className={s.loginBlock}>
                        Login
                    </div>
                </NavLink>}



        </header>
    )
}

export default Header;