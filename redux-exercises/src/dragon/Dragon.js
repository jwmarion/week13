
import React from 'react';

export default class Counter extends React.Component{
  render() {
    let message;

    function fight() {
      let action = Math.random();
      if (action > 0.5) {
        // console.log("DragonFight");
        store.dispatch({
          type: "fightDragon"
        })
      } else {
        store.dispatch({
          type: "fightHero"
        })
      }


    }

    function flight() {
      console.log("Flight");
      store.dispatch({
        type:"flight"
      })

    }
    return (
      <div>
        // <img src="http://img10.deviantart.net/e984/i/2015/287/c/5/red_dragon_by_sandara-d6hpycs.jpg" width="300"/>
        <br/>
        <label>Dragon: {store.getState().dragon}</label>&nbsp;
        <label>Hero: {store.getState().hero}</label>
        <br/>
        {message}
        <br/>
        <button onClick={fight}>
          Fight
        </button>
        <button onClick={flight}>
          Flight
        </button>
      </div>
    );
  }
}
