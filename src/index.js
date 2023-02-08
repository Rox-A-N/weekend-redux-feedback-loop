import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



// Reducers- console.logs for testing
const  feelingsReducer= (state = '', action) => {
    // console.log('in feelingRank reducer');
    if(action.type === 'SET_FEELINGS'){
      return state + action.payload;
    }
    if (action.type === 'CLEAR_INPUTS') {
        return (state = '');
    }
    return state;
  }

// Understanding Reducer
const understandingReducer = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        // console.log('in Understanding Reducer');
        return state + action.payload;
    }
    if (action.type === 'CLEAR_INPUTS') {
        return (state = '');     
    }
    return state;
}

// Support Reducer
const supportReducer = (state = '', action) => {
    // console.log('in supportReducer');
    if (action.type === 'SET_SUPPORT') {
        return state + action.payload;
    }
    if (action.type === 'CLEAR_INPUTS') {
        return (state = '');
    }
    return state;
}

// Comments Reducer
const commentsReducer = (state = '', action) => {
    // console.log('in commentsReducer');
    if (action.type === 'SET_COMMENT') {
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
            understandingReducer,
            supportReducer,
            commentsReducer
            
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
