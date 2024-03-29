import React from 'react';
import s from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/dialogs'}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/users'}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'}>Music</NavLink>
            </div>
            <div className={`${s.item} ${s.itemSettings}`}>
                <NavLink to={'settings'}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;