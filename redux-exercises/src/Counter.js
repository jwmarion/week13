import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import reducer from './Counter.reducer';

let store = Redux.createStore(reducer);

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>click('subtract')}>-</button>
        {store.getState()}
        <button onClick={()=>click('add')}>+</button>
      </div>
    );
  }
}
function click(val){
  store.dispatch({
    type: val
  });
}

function display() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
}

display();
store.subscribe(display);
