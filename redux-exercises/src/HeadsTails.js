import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './HeadsTails.reducer';
import * as Redux from 'redux';
let store = Redux.createStore(reducer);

// Add code to create a store

class HeadsTails extends React.Component {
  render() {
    let coinDisplay;
    if (store.getState()) {
      let imageUrl = store.getState().val > 0.5 ?
        'images/quarter-front.png' :
        'images/quarter-back.png';
      coinDisplay = <img src={imageUrl}/>;
    }
    return (
      <div>
        {coinDisplay}
        <button onClick={()=>click()}>
          Flip!
        </button>
      </div>
    );
  }
}
function click(){
 let rand = Math.random();
 store.dispatch({
   type: 'flip',
   val: rand
 });
}

function display() {
  ReactDOM.render(
    <HeadsTails/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
