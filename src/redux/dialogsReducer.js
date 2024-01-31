const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {

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

}

const dialogsReducer = (state = initialState, action) => {

     /* Добавление сообщения */

  
     switch (action.type) {
       case ADD_MESSAGE: 
         let newMessage = state.newMessageText;
         return {
          ...state,
          newMessageText: "",
          messages: [...state.messages, {id:6, message: newMessage}]
        };

        //  stateCopy.messages.push(newMessage);
        //  stateCopy.newMessageText = "";
       

       case UPDATE_NEW_MESSAGE_TEXT:
        return {
          ...state,
          messages: [...state.messages],
          newMessageText: action.newText
        }

       default:
         return state;
     }


    //  if (action.type === ADD_MESSAGE) {
    //    let newMessage = {
    //      id: 6,
    //      message: state.newMessageText,
    //    };

    //    state.messages.push(newMessage);
    //    state.newMessageText = "";

    //  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    //    state.newMessageText = action.newText;
    //  }

    //  return state;
}

/* добавление сообщения  */
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});


export default dialogsReducer;