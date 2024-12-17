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
import RefDemo from './component/RefsDemo/RefDemo';
import ControlDemo from './component/Control/ControlDemo';
import MyContext from './component/ContextDemo/MyContext';

function App() {
  const sharedData = 'This is some shared data.'

  return (
    <MyContext.Provider value={sharedData}>
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
            <Route path='/ref' element={<RefDemo/>}/>
            <Route path='/control' element={<ControlDemo/>}/>
          </Routes>
        </Router>
      </div>
    </MyContext.Provider>
  );
}

export default App;
