import React from 'react';
import s from './../ProfileInfo/ProfileInfo.module.css';
import mainimg from './../../../img/main-img.jpg';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className={s.mainImg} src={mainimg}></img>
      </div>

      <div className={s.descriptionBlack}>Ava + descreption</div>
    </div>
  );
};

export default ProfileInfo;