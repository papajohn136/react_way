import React from 'react';
import Post from './Posts/Post';
import App from '../../../App';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../storeContext';
import store from '../../../redux/redux-store';
import { connect } from 'react-redux';


// import mainimg from './../../img/main-img.jpg';




// const MyPostsContainer = (props) => {

//   return (
//     <StoreContext.Consumer> 
      
//       {(store) => {

//         let state = store.getState();

//         let addPost = () => {
//           // let action = {type: 'ADD-POST'};
//           // let text = newPostElement.current.value;
//           store.dispatch(addPostActionCreator());
//           // newPostElement.current.value='';
//           // props.updateNewPostText('');
//         };

//         let onPostChange = (text) => {
//           // let text = newPostElement.current.value;
//           // props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: text} );
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={addPost}
//             posts={state.profilePage.posts}
//             newPostText={state.profilePage.newPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// }

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)

export default MyPostsContainer;