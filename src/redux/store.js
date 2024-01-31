import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";


// let posts = [
//     {id: 1, message: 'Hy, how are you?', likesCount: 12},
//     {id: 2, message: 'This city need a new hero...?', likesCount: 122},
//     {id: 3, message: 'WTF?', likesCount: 1009},
    
//   ]
  
//   let dialogs = [
//     {id: 1, name: 'Андрей'},
//     {id: 2, name: 'Юрий'},
//     {id: 3, name: 'Михаил'},
//     {id: 4, name: 'Константин'},
//     {id: 5, name: 'Брюс Уэйн'},
//     {id: 6, name: 'Кларк Кент'}
//   ]
  
//   let messages = [
//     {id: 1, message: 'Привет'},
//     {id: 2, message: 'Видел Джокера?'},
//     {id: 3, message: 'Где детонатор?!'},
//     {id: 4, message: 'Этому городу нужен новый герой'},
//     {id: 5, message: "It's my city"}
//   ]
let store = {
  _state: {

    profilePage: {

      posts: [
        { id: 1, message: "Hy, how are you?", likesCount: 12 },
        { id: 2, message: "This city need a new hero...?", likesCount: 122 },
        { id: 3, message: "WTF?", likesCount: 1009 },
      ],

      newPostText: 'new text'

    },

    dialogsPage: {

      messages: [
        { id: 1, message: "Привет" },
        { id: 2, message: "Видел Джокера?" },
        { id: 3, message: "Где детонатор?!" },
        { id: 4, message: "Этому городу нужен новый герой" },
        { id: 5, message: "It's my city" },
      ],

      dialogs: [
        { id: 1, name: "Андрей" },
        { id: 2, name: "Юрий" },
        { id: 3, name: "Михаил" },
        { id: 4, name: "Константин" },
        { id: 5, name: "Брюс Уэйн" },
        { id: 6, name: "Кларк Кент" },
      ],

      newMessageText: 'new message'

    },


    sidebar: {
        
    }
  },
  _callSubscriber () {
  },

  getState() {
    return this._state;
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  },

/* добавление поста */

  // addPost () {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };
  
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText ='';
  //   this._callSubscriber(this._state);
  // },

  // updateNewPostText (newText) {

 
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },

  // /* добавление сообщения  */

  // addMessage () {

  //   let newMessage = {
  //     id: 6,
  //     message: this._state.dialogsPage.newMessageText,
  //   };
  
  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText ='';
  //   this._callSubscriber(this._state);
  // },

  // updateNewMessageText (newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },


  dispatch (action) {
    /* Добавление поста */
    this._state.profilePage = profileReducer(this._state.profilePage, action)

    /* Добавление сообщения */
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state);  

    // if (action.type === ADD_POST) {
    //   let newPost = {
    //     id: 5,
    //     message: this._state.profilePage.newPostText,
    //     likesCount: 0,
    //   };
    
    //   this._state.profilePage.posts.push(newPost);
    //   this._state.profilePage.newPostText ='';
    //   this._callSubscriber(this._state);

    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //   this._state.profilePage.newPostText = action.newText;
    //   this._callSubscriber(this._state);

    //   /* Добавление сообщения */

    // } else if (action.type === ADD_MESSAGE) {
    //   let newMessage = {
    //     id: 6,
    //     message: this._state.dialogsPage.newMessageText,
    //   };
    
    //   this._state.dialogsPage.messages.push(newMessage);
    //   this._state.dialogsPage.newMessageText ='';
    //   this._callSubscriber(this._state);

    // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //   this._state.dialogsPage.newMessageText = action.newText;
    //   this._callSubscriber(this._state);
    // }
  }
  
}

// let rerenderEntireTree = () => {

// }


/* добавление поста*/

// export const addPost = () => {

//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };

//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText ='';
//   rerenderEntireTree(state);
// };

// export const updateNewPostText = (newText) => {

 
//   state.profilePage.newPostText = newText;
//   rerenderEntireTree(state);
// };

/* добавление сообщения  */
// export const addMessage = () => {

//   let newMessage = {
//     id: 6,
//     message: state.dialogsPage.newMessageText,
//   };

//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText ='';
//   rerenderEntireTree(state);
// };

// export const updateNewMessageText = (newText) => {
//   state.dialogsPage.newMessageText = newText;
//   rerenderEntireTree(state);
// };

// export const subscribe = (observer) => {
//   rerenderEntireTree = observer;
// }



  export default store;
  window.store = store