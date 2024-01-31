import React from 'react';
import s from './../Header/Header.module.css';
import logo2 from './../../img/logo2.png';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={s.header}>

      <NavLink to="/profile">

      <img src={logo2}></img>

      </NavLink>
    </header>
  );
};

export default Header;