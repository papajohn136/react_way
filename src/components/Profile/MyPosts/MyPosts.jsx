import React from 'react';
import s from './../MyPosts/MyPosts.module.css';
import Post from './Posts/Post';
import Button from 'react-bootstrap/Button';
import App from '../../../App';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
// import MyPostsContainer from './MyPostsContainer';

// import mainimg from './../../img/main-img.jpg';




const MyPosts = (props) => {

  // let posts = [
  //   {id: 1, message: 'Hy, how are you?', likesCount: 12},
  //   {id: 2, message: 'This city need a new hero...?', likesCount: 122},
    
  // ]
  
  let postsElements = props.posts.map( p => <Post message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost()
    // let action = {type: 'ADD-POST'};
    // let text = newPostElement.current.value;
    // props.dispatch( addPostActionCreator() );
    // newPostElement.current.value='';
    // props.updateNewPostText('');
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: text} );
    // let action = updateNewPostTextActionCreator(text);
    // props.dispatch( action );
  };


  return (
    <div className={s.postBlock}>
      <h3>My Post</h3>
      <div>
        <textarea onChange={onPostChange} ref={ newPostElement }  value={props.newPostText}/>
      </div>

      <div>
        {/* <button onClick={ onAddPost }>Add Post</button> */}
        <Button onClick={ onAddPost } variant="outline-light">Добавить пост</Button>{' '}
      </div>

      <div className={s.posts}>
        { postsElements }
      </div>
    </div>
  );
};

export default MyPosts;