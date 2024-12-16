import './App.css';
import EventDemoComponent from './component/EventDemo/EventDemoComponent';
import Hello from './component/Hello/hello';
import React, { useState } from 'react';
import StateDemoComponent from './component/StateDemo/StateDemoComponent';
import Post from './component/post-comment-assignment/Post';
import ListAndKeysComponent from './component/ListAndKey/ListAndKeysComponent';
import AxiosGetDemo from './component/Axios-assignment/AxiosGetDemo';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar';
import ToDoList from './component/todolist/ToDoList';

function App() {
  let message = "Hello React Again!";
  return (
    <div className="App">
      <Router>
        <div className='app'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<Hello firstname = "Tony" lastname="Hardiman"/>}/>
          <Route path='/sdc' element={<StateDemoComponent/>}/>
          <Route path='/edc' element={<EventDemoComponent/>}/>
          <Route path='/axios' element={<AxiosGetDemo/>}/>
          <Route path='/post-assignment' element={<Post/>}/>
          <Route path='/list-and-key' element={<ListAndKeysComponent/>}/>
          <Route path='/todo' element={<ToDoList/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
