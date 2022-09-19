import React from 'react';
import './App.scss';
import Message from "./components/Message";

function App() {
  let name = 'Vyacheslav';
  return (
    <div className="App">
      <header className="App-header">
        <h1>My test message component</h1>
        <Message name={name}/>
      </header>
    </div>
  );
}

export default App;
