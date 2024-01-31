import React from "react";
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
// import dialog_img from './../../img/dialogs.jpeg'




const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={s.dialog + " " + s.active}>
        <NavLink to= {path} className={({isActive}) =>`${isActive ? s.activeLink : ''}`}>{props.name} </NavLink>
      </div>
    );
}



export default DialogItem;