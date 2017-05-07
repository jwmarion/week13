import React from 'react';

class Counter extends React.Component {
  render() {
    let count = this.props.count;
    let add = this.props.add;
    let subtract = this.props.subtract;
    return (
      <div>
        <button onClick={subtract}>-</button>
        {count}
        <button onClick={add}>+</button>
      </div>
    );
  }
}

export default Counter;
