import './App.css';
import EventDemoComponent from './EventDemoComponent';
import Hello from './hello';
import React from 'react';
import StateDemoComponent from './StateDemoComponent';
import Post from './Post';

function App() {
  let message = "Hello React Again!";

  return (
    <div className="App">
      <h2>{message}</h2>
      <Hello firstname = "Tony" lastname="Hardiman"/>
      <EventDemoComponent/>
      <hr></hr>
      <StateDemoComponent/>
      <hr></hr>
      <Post/>
    </div>
  );
}

export default App;
