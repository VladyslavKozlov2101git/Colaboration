import React from 'react';
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.svg'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <img src={Logo} alt="logo" className="navbar__logo"/>
                <div className="navbar__header">Our Todo</div>
                <div className="navbar__login button--autho"><NavLink to="/login">Войти</NavLink></div>
                <div className="navbar__registration button--reg"><NavLink to="/registration">Зарегистрироваться</NavLink></div>
            </div>
        </div>
    );
};

export default Navbar;