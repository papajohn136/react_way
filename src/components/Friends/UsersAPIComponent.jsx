import React from "react";
import styles from "./Friends.module.css";
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Users from "./Users";

// class UsersAPIComponent extends React.Component {

  

//     componentDidMount() {

//       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
  
//         this.props.setUsers(response.data.items);
//         this.props.setTotalUsersCount(response.data.totalCount);
  
//       })

//     }

//     onPageChanged = (pageNumber) => {
//       this.props.setCurrentPage(pageNumber)
//       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

//       this.props.setUsers(response.data.items);

//     })
//     }
  

  

//   // getUsers = () => {

//   //   if (this.props.users.length === 0 ) {
  
//   //     axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
  
//   //       this.props.setUsers(response.data.items);
  
//   //     })
     
  
//   //   }
//   // }

//   render() {

    

//     return <Users 
//     totalUsersCount={this.props.totalUsersCount}
//     pageSize={this.props.pageSize}
//     currentPage={this.props.currentPage}
//     onPageChanged={this.onPageChanged}
//     users={this.props.users}
//     follow={this.props.follow}
//     unfollow={this.props.unfollow}


//     />
//   }
// }

// export default UsersAPIComponent;