import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './index.css';
import MovieWidget from './MovieWidget';
import reducer from './MovieWidget.reducer.js';
// import * as actions from './MovieWidget.actions.js';
import MWContainer from './MovieWidget.container.js';

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <MWContainer/>
  </Provider>,
  document.getElementById('root')
);
