import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



// Reducers 
// this will be data from DB, but I actually need to send info to db
const  feelingsReducer= (state = '', action) => {
    console.log('in feelingRank reducer');
    // payload will be the data from the db
    if(action.type === 'SET_FEELINGS'){
        console.log('SET_FEELINGS');
      return state + action.payload;
    }
    if (action.type === 'CLEAR_INPUTS') {
        return (state = '');
    }
    return state;
  }

// Store
const storeInstance = createStore(
    // pass reducers here
    combineReducers(
        {
            feelingsReducer,
            // understandingReducer,
            // supportedReducer,
            // commentsReducer
        }
        ),
        applyMiddleware(
            logger
        )
);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>, 
    document.getElementById('root')
    );
    registerServiceWorker();

export { storeInstance };
