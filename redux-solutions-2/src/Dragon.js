
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Dragon.reducer';
import * as ReactRedux from 'react-redux';
import DragonGame from './DragonGame';


let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const DragonGameContainer = ReactRedux.connect(
  state => ({ dragon: state.dragon, hero: state.hero}),
  dispatch => ({
    flight: () => dispatch({
      type: 'flight'
    }),
    fightHero:()=>dispatch({
      type: 'fightHero'
    }),
    fightDragon:()=>dispatch({
      type: 'fightDragon'
    })
  })
)(DragonGame);

function display() {
  ReactDOM.render(
    <ReactRedux.Provider store={store}>
      <DragonGameContainer/>
    </ReactRedux.Provider>,
    document.getElementById('root')
  );
}

store.subscribe(display);
display();
