import React from 'react';
import s from './../Posts/Post.module.css';
// import mainimg from './../../img/main-img.jpg';
import avatar from './../../../../img/avatar.jpeg'

const Post = (props) => {
  return (
    
       
    <div className={s.item}>

      <img src={avatar} alt="" />
            
      {props.message}

      <div>

        <span>like {props.like}</span><br></br>

      </div>

            
    </div>         

  );
};

export default Post;