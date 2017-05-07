import React from 'react';

export default class MovieWidget extends React.Component{
  render(){
    return(
      <div>
        <input type='text' onChange={this.props.typeText} value={this.props.searchValue}/>
        <button>Submit</button>
      </div>
    );
  }
}
