/*
1. The dragon will initially have 20 health.
2. The hero will initially have 10 health.
3. Display the health of the dragon and the hero.
4. The hero will chose to either
  a. fight - click the "Fight" button or
  b. flight - click the "Flight" button
5. If hero chooses to fight, it will either deal 5 damages to the dragon or the hero - randomly (50/50 chance).
6. If hero chooses flight, he will get 2 health back.
7. If the dragon's health goes below 0, dragon dies, player wins.
8. If the hero's health goes below 0, hero dies, player loses.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Dragon.reducer';

let store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// class DragonGame extends React.Component

// const store = Redux.createStore(reducer);

const SwitchContainer = ReactRedux.connect(
  state => ({ on: state.on }),
  dispatch => ({
    flight: () => dispatch({
      type: 'flight'
    }),
    fightHero:()=>dispatch({
      type: 'fightHero'
    }),
    fightHero:()=>dispatch({
      type: 'fightDragon'
    })
  })
)(Dragon);

function display() {
  ReactDOM.render(
    <DragonGame/>,
    document.getElementById('root')
  );
}
store.subscribe(display);
display();
