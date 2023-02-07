import React from 'react';
import './App.css';

// imports added
import { HashRouter as Router, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Feedback from '../Feedback/Feedback';
import Submitted from '../Submitted/Submitted';

function App() {

  const reduxStore = useSelector(store => store);

  return (
    <Router>

    <div className='App'>
      {/* <div>{JSON.stringify(reduxStore)}</div> */}
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    

    <Route path="/" exact>
      <Feelings />
    </Route>
    <Route path="/understanding" >
      <Understanding />
    </Route>
    <Route path="/support" >
      <Support />
    </Route>
    <Route path={"/comments"}>
      <Comments />
    </Route>
    <Route path={"/feedback"}>
      <Feedback />
    </Route>
    <Route path={"/submitted"}>
      <Submitted />
    </Route>
    </div>

  </Router>
  )
}

export default App;
