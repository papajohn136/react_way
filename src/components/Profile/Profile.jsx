import React from 'react';
import s from './../Profile/Profile.module.css';
// import mainimg from './../../img/main-img.jpg';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Post from './MyPosts/Posts/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';


// let posts = [
//   {id: 1, message: 'Hy, how are you?', likesCount: 12},
//   {id: 2, message: 'This city need a new hero...?', likesCount: 122},
  
// ]

// let postsElements = posts.map( p => <Post message={p.message} like={p.likesCount} />);

const Profile = (props) => {

  
  return (
    <div>
      
      <ProfileInfo />
      <MyPostsContainer

      // store={props.store}


      // posts={props.profilePage.posts} 
      // newPostText={props.profilePage.newPostText}
      // dispatch={props.dispatch}
      // updateNewPostText={props.updateNewPostText}
      />

    </div>
  );
};

export default Profile;