import React from "react";
import s from './../Dialogs.module.css';
// import dialog_img from './../../img/dialogs.jpeg'



const Message = (props) => {
    return (

        <div className={s.message}>{props.message}</div>
        
    )
}


export default Message;