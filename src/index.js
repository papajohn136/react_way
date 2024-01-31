// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import state, { subscribe } from './redux/state';
// import {addPost} from './redux/state';
// import store from './redux/store';
import store from './redux/redux-store';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import StoreContext, { Provider } from './storeContext';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state';
// import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state';
import 'bootstrap/dist/css/bootstrap.min.css';



// addPost('i neeed')
const root = ReactDOM.createRoot(document.getElementById('root'));

// let rerenderEntireTree = (state) => {

root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App
          // state={state}
          // store={store}
          // dispatch={store.dispatch.bind(store)}

          // updateNewPostText={store.updateNewPostText.bind(store)}
          // updateNewMessageText={store.updateNewMessageText.bind(store)}
          // addMessage={store.addMessage.bind(store)}
        />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);



// rerenderEntireTree(store.getState());

// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
