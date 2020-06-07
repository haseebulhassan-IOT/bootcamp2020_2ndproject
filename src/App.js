import React from 'react';
import './App.css';
import './hello.css';

function App({name}) {
  return (
    <div className="App">
      <h1 className = "myname">Welcome to React App {name}</h1>
      <h2> Hello from Haseeb Ul Hassan</h2>
      <p> This is created by <strong>Haseeb Ul Hassan</strong></p>
      <h4> 2nd project of Bootcamp 2020 done!!!</h4> 
      <div> Age is 26</div>
    </div>
  );
}

export default App;
