import React from "react";
// import s from './../Friends/Friends.module.css';
import { connect } from "react-redux";
// import Friends from "./UsersAPIComponent";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from "../../redux/usersReducer";
// import UsersAPIComponent from "./UsersAPIComponent";
import axios from "axios";
import Users from "./Users";
// import dialog_img from './../../img/dialogs.jpeg'
import loader from './../../img/ZZ5H.gif'
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

  

  componentDidMount() {

    this.props.toggleIsFetching(true)

    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {

      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
      this.props.toggleIsFetching(false)

    })

  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true)
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {

    this.props.setUsers(response.data.items);
    this.props.toggleIsFetching(false)

  })
  }

render() {

  return (
    <>
      
        {this.props.isFetching ? (
          <Preloader />
        ) : null}
      
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
      />
    </>
  );
  
}
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching

  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCount(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}

export default connect (mapStateToProps, mapDispatchToProps) (UsersContainer);