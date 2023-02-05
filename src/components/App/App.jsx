import React from 'react';
import axios from 'axios';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    <div>
      <h2>How are you feeling today?</h2>
      <p>(Where 5 = Great! and 0 = Unsure)</p>
      <label htmlFor="feeling">Feeling?</label>
      <input type="number" min={0} max={5}/>
      <button className='button'>NEXT</button>
    </div>
    </div>
  );
}

export default App;
