const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {

  posts: [
    { id: 1, message: "Hy, how are you?", likesCount: 12 },
    { id: 2, message: "This city need a new hero...?", likesCount: 122 },
    { id: 3, message: "WTF?", likesCount: 1009 },
  ],

  newPostText: 'new text'

}

const profileReducer = (state = initialState, action) => {
     /* Добавление поста */
     
     switch (action.type) {
       case ADD_POST: 
         
       let message = state.newPostText
        //  let newPost = {
        //    id: 5,
        //    message: state.newPostText,
        //    likesCount: 0,
        //  };

        return {
          ...state,
          newPostText: '',
          posts: [...state.posts, {id: 4, message: message, likesCount: 100}]

         }
        //  let stateCopy = { ...state };
        //  //  state.posts.push(newPost);
        //  stateCopy.posts = [...state.posts];
        //  stateCopy.posts.push(newPost);
        //  stateCopy.newPostText = "";
        //  return stateCopy;
       

       case UPDATE_NEW_POST_TEXT:
        // let stateCopy = { ...state };
        return {
          ...state,
          newPostText: action.newText
        }
        // stateCopy.newPostText = action.newText;
        //  return stateCopy;
       default:
         return state;
     }

    //  if (action.type === ADD_POST) {
    //     let newPost = {
    //       id: 5,
    //       message: state.newPostText,
    //       likesCount: 0,
    //     };
      
    //     state.posts.push(newPost);
    //     state.newPostText ='';
  
    //   } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;

    //   }
  
       

    // return state;
}

/* добавление поста*/
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;