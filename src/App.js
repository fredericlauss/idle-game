import './App.css';
import React, { useState } from 'react';


function App() {

  const [gameData, setGameData] = useState({
    gold: 0,
    goldMiner: 0,
    steel: 0,
    steelMiner: 0,
    winningCondition: 0,
    timer: 0,
  });
  const [gold, setGold] = useState(50);
  const [steel, setSteel] = useState(0);



  /* CLIKS UPDATE */ 
  function handleClickGold() {
    setGold( gold + 1)
  }
  
  function handleClickSteel() {
    setSteel( steel + 1)
}


  // /* MINERS */ 
  // /* BUY */
  // function buyGoldMiner () {

  // }

  // function buyWoodMiner () {

  // }

  // /* ADD */
  // function addGoldMiner () {

  // }

  // function addWoodMiner () {

  // }

  // /* remoove */
  // function remooveGoldMiner () {

  // }

  // function remooveWoodMiner () {

  // }

  // /* PASSIVE INCOM */




  return (
    <div className="App">
      <p>Gold :</p>
      <p>{gold}</p>
      <button onClick={handleClickGold}>Mine gold</button>
      <p>steel :</p>
      <p>{steel}</p>
      <button onClick={handleClickSteel}>Mine steel</button>
    </div>
  );
}

export default App;
