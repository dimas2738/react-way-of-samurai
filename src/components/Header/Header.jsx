import React from 'react';
import s from './Header.module.css';
import logo from "../../logo.svg"
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
    <header className={s.header}>
    <NavLink to="/profile" >
            <img src={logo} />
    </NavLink>

    </header>
)
}

export default Header;