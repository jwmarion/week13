
export default function reducer(state=
{
  board: [null, null, null, null, null, null, null, null, null],
  player: 1,
  continue: true,
  lastClicked: -1,
  msg: 'Tic Tac Toe!'
}, action){
  if (action.type === 'click' && state.board[action.value]=== null && state.continue){
    let b = state.board.slice(0,action.value)

    if (state.player === 1){
      b.push(1);
    }else{
      b.push(-1);
    }
    // let winMsg = "Tic Tac Toe"
    let newBoard = b.concat(state.board.slice(action.value+1,state.board.length));
    let winMsg;
    let cont;
    if(
          Math.abs(newBoard[0] + newBoard[1] + newBoard[2]) === 3 ||
          Math.abs(newBoard[3] + newBoard[4] + newBoard[5]) === 3 ||
          Math.abs(newBoard[6] + newBoard[7] + newBoard[8]) === 3 ||
          Math.abs(newBoard[0] + newBoard[3] + newBoard[6]) === 3 ||
          Math.abs(newBoard[1] + newBoard[4] + newBoard[7]) === 3 ||
          Math.abs(newBoard[2] + newBoard[5] + newBoard[8]) === 3 ||
          Math.abs(newBoard[0] + newBoard[4] + newBoard[8]) === 3 ||
          Math.abs(newBoard[2] + newBoard[4] + newBoard[6]) === 3 ){
            if (state.player === -1 ){
              winMsg = 'O Wins!';
            }
            else{
              winMsg = 'X Wins!';
            }
            cont = false;
          }
          else{
              // //check draw
              let end = 0;
              newBoard.forEach((square)=>{if(square === null){end +=1;}});
              if (end === 0){
                cont = false;
                winMsg = "Draw!";
              }
            else{
            winMsg = "Tic Tac Toe!"
            cont = true;
          }
          }
          // //check draw
          // var end = 0;
          // //state.board.forEach((square)=>{if(square === null){end +=1;}});
          //
          // if (end === 0){
          //   this.setState({msg: "Draw!", endGame: true});
          // }





    return Object.assign ({}, state, {
      lastClicked: "X",
      board: newBoard,
      player: state.player * -1,
      msg: winMsg,
      continue: cont
    })
  }
  else{ if(action.type === 'reset'){
    return Object.assign ({}, state, {
      board: [null, null, null, null, null, null, null, null, null],
      player: 1,
      continue: true,
      lastClicked: -1,
      msg: "Tic Tac Toe!"
    })
  }
    else{
    return state;
    }
  }
}


// function sketelon(){
//     ______
//   /        \
//   | 0   0   |
//   \   ^   //
//   /_|_|_|_\
//   \|_|_|_|/
//        | |
//        | |
// }
