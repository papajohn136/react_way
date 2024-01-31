import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Post from './components/Profile/MyPosts/Posts/Post';

import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/UsersAPIComponent';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from './components/Friends/FriendsContainer';

// let posts = [
//   {id: 1, message: 'Hy, how are you?', likesCount: 12},
//   {id: 2, message: 'This city need a new hero...?', likesCount: 122},
  
// ]

// let postsElements = posts.map( p => <Post message={p.message} like={p.likesCount} />);

const App = (props) => {

  return (
    // <BrowserRouter>
      <div className="app-wrapper">
        <Header />

        <Navbar />

        <div className="app-wrapper-content">

          <Routes>
            <Route path='/dialogs/*' element={ 
            <DialogsContainer
            // store={props.store}

            // state={props.state.dialogsPage}
            // dispatch={props.dispatch}
            // newMessageText={props.state.dialogsPage.newMessageText}

            // updateNewMessageText={props.updateNewMessageText}
            /> 
            
            } />

            <Route path='profile' element={ 
            <Profile 
            // store={props.store}

            // profilePage={props.state.profilePage} 
            // dispatch={props.dispatch}
            // updateNewPostText={props.updateNewPostText}
            />} />

            <Route path='news' element={<News />} />
            <Route path='music' element={<Music />} />
            <Route path='settings' element={<Settings />} />
            <Route path='users' element={<FriendsContainer />} />

          </Routes>

        </div>

          {/* <Dialogs /> */}
        {/* <Profile />  */}
      </div>
    // </BrowserRouter>
  );
}





export default App;
