import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import dialog_img from './../../img/dialogs.jpeg'
import batman from "../../img/batmanAvatar.jpeg"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";
import { connect } from "react-redux";



// const DialogsContainer = (props) => {

//   return (
//     <StoreContext.Consumer>

//       {(store) => {
//         let state = store.getState().dialogsPage;

//         let addMessage = () => {
//           // let text = newMessageElement.current.value;
//           store.dispatch(addMessageActionCreator());
//         };

//         let onMessageChange = (text) => {
//           // let text = newMessageElement.current.value;
//           let action = updateNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             addMessage={addMessage}
//             updateNewMessageText={onMessageChange}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer;