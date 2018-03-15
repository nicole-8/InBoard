import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { appReducer } from './store/reducers';
import { setStatus } from './actions';
import routes from './routes';
import initialState from '../initialState.json';


const store = createStore(appReducer, initialState);
window.React = React;
window.store = store;
store.subscribe(() => {
  const state = JSON.stringify(store.getState());
  localStorage['redux-store'] = state;
});

const testMember = {
  name: 'Nicole',
  status: 'OUT',
};

console.log(store.getState());
console.log('changing state....');

store.dispatch(setStatus(testMember));

console.log(store.getState());


render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('react-container'),
);
