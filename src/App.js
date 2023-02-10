import './App.css';
import React, { useState } from 'react';
import Board from './components/Board.js';
import WinnerBoard from './components/WinnerBoard.js';

function App() {

  // const [gameData, setGameData] = useState({
  //   worker: 0,
  //   gold: 0,
  //   goldWorker: 0,
  //   goldPerSecond: 0,
  //   wood: 0,
  //   woodWorker: 0,
  //   woodPerSecond: 0,
  //   winningCondition: 0,
  //   timer: 0,
  // });

  const[winner, setWinner] = useState('');

  return (
    <div className="App">
      {winner ? ( 
          < WinnerBoard 
          winner={winner}/>
        ) : ( 
          <Board 
          winner={winner}
          setWinner={setWinner}
          />
        ) 
      }
    </div>
  );
}

export default App;
