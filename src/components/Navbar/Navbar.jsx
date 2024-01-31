import React from 'react';
import s from'./../Navbar/Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => `${isActive ? s.activeLink : ""}`}
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => `${isActive ? s.activeLink : ""}`}
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={({ isActive }) => `${isActive ? s.activeLink : ""}`}
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={({ isActive }) => `${isActive ? s.activeLink : ""}`}
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/settings"
            className={({ isActive }) => `${isActive ? s.activeLink : ""}`}
          >
            Settings
          </NavLink>
        </div>

        <div className={s.item + " " + s.lastItem}>
          <NavLink
            to="/users"
            className={({ isActive }) => `${isActive ? s.activeLink : ""}`}
          >
            Friends
          </NavLink>

          <div className={s.friendsWrapper}>

            <div className={s.friendsInner}>
              <div className={s.friendItem}>
                <div className={s.friendLogo}></div>
                <div className={s.friendName}>Сергей</div>
              </div>
              <div className={s.friendItem}>
                <div className={s.friendLogo}></div>
                <div className={s.friendName}>Брюс</div>
              </div>
              <div className={s.friendItem}>
                <div className={s.friendLogo}></div>
                <div className={s.friendName}>Кларк</div>
              </div>
              
            

            </div>

          </div>

    
        </div>
      </nav>
    );
}

export default Navbar;