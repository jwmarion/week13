
import React from 'react';

export default class DragonGame extends React.Component{
  render() {
    let message;

    let fight = ()=> {
      let action = Math.random();
      if (action > 0.5) {
        this.props.fightDragon();
      } else {
        this.props.fightHero();
      }
    }
    return (
      <div>
        <img src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300"/>
        <br/>
        <label>Dragon: {this.props.dragon}</label>&nbsp;
        <label>Hero: {this.props.hero}</label>
        <br/>
        {this.props.message}
        <br/>
        <button onClick={fight}>
          Fight
        </button>
        <button onClick={this.props.flight}>
          Flight
        </button>
      </div>
    );
  }
}
