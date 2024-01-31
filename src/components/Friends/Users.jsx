import React from "react";
import styles from "./Friends.module.css";
// import s from './../Friends/Friends.module.css';
// import dialog_img from './../../img/dialogs.jpeg'
// import axios from 'axios';
import userPhoto from './../../img/batmanLogo.png'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
import Button from 'react-bootstrap/Button';

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className="">
        {pages.map((p) => {
          return (
            <span
              className={`${
                props.currentPage === p && styles.selectedPage
              } ${styles.pageNumber}`}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {/* <button onClick={this.getUsers}>Get Users</button> */}
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userPhoto}
                alt=""
                className={styles.userAvatar}
              />
            </div>
            <div className={styles.btn}>
              {u.followed ? (
                <Button
                variant="outline-danger"
                onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                variant="outline-light"
                onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </Button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{}</div>
              <div>{}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;