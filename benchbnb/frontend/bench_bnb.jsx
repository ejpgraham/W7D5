import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/session_api_util.js';
import configureStore from './store/store.js';
import Root from './components/root';
import * as Action from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.signup = Action.signup;
  window.login = Action.login;
  window.logout = Action.logout ;
  const store = configureStore();
  window.store = store;
  ReactDOM.render( <Root store={ store } />, root );
});
