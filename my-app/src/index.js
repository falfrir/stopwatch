import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import './index.css';

const reducer = (state={count: 0, startBtn: 'enabled'}, action) => {
  switch(action.type){
    case 'MORE': {
      console.log("more");
      return state = {
        ...state
      }
      break;
    }
    default:
      console.log('default');
     break;
  }
  return state;
}


let store = createStore(reducer, applyMiddleware(logger));

render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));
  