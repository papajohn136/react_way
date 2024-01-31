import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
// import dialog_img from './../../img/dialogs.jpeg'
import batman from "../../img/batmanAvatar.jpeg"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Button from 'react-bootstrap/Button';



const Dialogs = (props) => {
  
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );
    
    let messagesElements = state.messages.map( m => <Message message={m.message} /> );

    let newMessageElement = React.createRef();

    let addMessage = () => {
      let text = newMessageElement.current.value;
      // props.dispatch( addMessageActionCreator() );
      props.addMessage()
    }

    let onMessageChange = () => {
      let text = newMessageElement.current.value;
      // let action = updateNewMessageTextActionCreator(text);
      // props.dispatch( action);
      props.updateNewMessageText(text);
    }


    return (
      <div className={s.dialogs}>
        {/* <img className={s.dialog_img} src={dialog_img} alt="" /> */}

        <div className={s.dialogsLogo}>
          <img className={s.avatar} src={batman} alt="batman" />
        </div>

        <div className={s.dialogsItems}>{dialogsElements}</div>

        <div className={s.messages}>
          <div>{messagesElements}</div>

          <div>
            <div>
              <textarea
                onChange={onMessageChange}
                ref={newMessageElement}
                value={state.newMessageText}
                placeholder="Enter message"
              />
            </div>

            <div>
              {/* <button onClick={addMessage}>Отправить</button> */}

              <Button onClick={addMessage} variant="outline-light">Отправить</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dialogs;