import React, { Component} from 'react'
import Square from './Square';
import Status from './Status';
import Reset from './Reset';
import calculateWinner from '../utils/utils.js';
// import { useEffect } from 'react';

class Board extends Component {
    state = {
        marks: Array(9).fill(null), // Inicializamos un arreglo de 9 posiciones seteadas a nulo  
        isPlayerX: true, 
        winner: null
    }
    
    getPlayerMark(){
        const { isPlayerX } = this.state;
        return isPlayerX ? 'X' : 'O';
    }

    handleClick(index){
        const { marks, isPlayerX, winner } = this.state;
        if(!winner && !marks[index]){
            marks[index] = this.getPlayerMark();
            // console.log("marks <=", marks);
            const winner = calculateWinner(marks);
            this.setState({
                marks: marks, 
                isPlayerX: !isPlayerX, 
                winner, 
            });
        }
    }
    
    // 2.4.1 la funcion auxiliar solo restaura los valores default del estado
    // y al hacerlo con setState el ciclo vuelve a empezar cuando hay ganados o el tablero esta lleno 
    handleResetClick(){
      this.setState({
        marks: Array(9).fill(null), 
        isPlayerX: true, 
        winner: null
      });
    }


    renderSquare(index) {
        const {marks} = this.state;
        const eventoClick = () => this.handleClick(index);              // Arrow function porque estoy declarando una funcion, mas no ejecutandola DONDE THIS SE REFIERE AL CONTEXTO EXTRERIOR
                        // =  function() { this.handleClick(index)};    // Funciones convencionales mandan error por el contexto de this, que aqui es INTERIOR
        return <Square mark={marks[index]}  eventoClick={eventoClick} />;
    }
    
    // 2. la funcion que rendeara el reset
    renderReset(){
      const { winner } = this.state;          // 2.1 del estado necesitamos saber el valor actual de winner
      const stopGame = this.checkFullBoard(); // 2.2 y necesitamos saber si el tablero tiene posiciones vacias

      const eventoClick = () => this.handleResetClick();  // 2.3 mandamos la funcion que ejecutara el evento onclick del boton que se rendeara
      
      if (winner || stopGame){  // SI habemus ganador o el tablero esta lleno
        return <Reset eventoClick={eventoClick} />; // 2.4 rendreamos el boton de reset... 
      }
    }

    // 2.2.1 esta funcion auxiliar nos ayuda a saber si ya se ocuparon todas las casillas del tablero
    checkFullBoard(){
      const {marks} = this.state;
      let stopGame = true;
      marks.forEach((e) => {
        if (e == null){
          stopGame = false;
        }
      });
      console.log('stopGame', stopGame);
      return stopGame;
    }


    render() {
      const {winner} = this.state; 
      return (
        <div>
            <Status 
                winner={winner} 
                nextPlayer = {this.getPlayerMark()}
            />
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          <div>
            {/* 1 una funcion que rendeara el boton de reset */}
            {this.renderReset()}
          </div>
        </div>
      );
    }
}

// const Board = () => {
//   const [ marks, setMarks ] = useState(Array(9).fill(null));
//   const [ isPlayerX, setIsPlayerX ] = useState(true);
//   const [ winner, setWinner ] = useState(null);
//   const [ player, setPlayer] = useState('X');
//   const [ reset, setReset] = useState(null);

//   useEffect(() => {
//     document.title = `${player}'s turn`;
//   });
  
//   // didmount o didupdate
//   useEffect(() => {
//     setPlayer(isPlayerX ? 'X' : 'O');
//   }, [isPlayerX]);
  
//   useEffect(() => {
//     if(winner){
//       setReset(<button onClick={resetGame}>RESET</button>);
//     }
//   });


//   const resetGame = () => {
//     setMarks(Array(9).fill(null));
//     setIsPlayerX(true);
//     setWinner(null);
//   }
  
//   // const getPlayerMark = () => {
//   //   return isPlayerX ? 'X' : 'O';
//   // }
  
//   const handleClick = index => {
//     if (!winner && !marks[index]) {
//       // marks[index] = getPlayerMark();
//       marks[index] = player;
//       setMarks(marks);
//       setIsPlayerX(!isPlayerX);

//       const winner = calculateWinner(marks); // RETO
//       setWinner(winner); // RETO useEffect EFECTO SECUNDARIO
//     }
//   }
//   const renderSquare = index => {
//     const clickEvent = () => handleClick(index);
//     return <Square mark={marks[index]} clickEvent={clickEvent} />;
//   }
  
  
//   return (
//     <div>
//       <Status
//         winner={winner}
//         nextPlayer={getPlayerMark()}
//         resetFn={resetGame}
//       />
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <div>
//         {reset}
//       </div>
//     </div>
//   );
// }

export default Board;