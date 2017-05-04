import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import movieWidget from './MovieWidget';
import ReduxThunk from 'redux-thunk';
import reducer from './MovieWidget.reducer.js';
import actions from './MovieWidget.actions.js';
// import container from './MovieWidget.container.js';

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);


ReactDOM.render(
  <movieWidget store={store}>
    <container/>
  </movieWidget>,
  document.getElementById('root')
);
