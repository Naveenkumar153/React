import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Expamples.jsx';

import Player from './components/project-2/Button.jsx';
import Gameboard from './components/project-2/Gameboard.jsx';
import { useState } from "react";
import Logs from './components/project-2/Logs.jsx';
import { WINNING_COMBINATIONS } from './components/project-2/winning-combination.js';

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';
       
  if(gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  };

  return currentPlayer;

};

function App() {
  const [ gameTurns, setGameTurns ] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns);
  console.log('activePlayer',activePlayer);

  function handelSelectSquare(rowIndex,colIndex) {
    setGameTurns((prevTurns) => {
       let currentPlayer = deriveActivePlayer(prevTurns);

       const updatedState = [
        { square: { row:rowIndex, col:colIndex },  player: currentPlayer},
        ...prevTurns
       ];

       return updatedState;
    });
  }; 

  
  return (
    <>
     {/* First excerise */}
      {/* <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main> */}

      <main>
        <div id='game-container'>
          <ol id='players'>
            <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
            <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
          </ol>
          <Gameboard onSelectSquare={handelSelectSquare}  turns={gameTurns}/>
        </div>
        <Logs turns={gameTurns}/> 
      </main>

    </>
  );
}

export default App;
