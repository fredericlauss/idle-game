import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

  const [gameData, setGameData] = useState({
    worker: 0,
    gold: 0,
    goldWorker: 0,
    goldPerSecond: 0,
    wood: 0,
    woodWorker: 0,
    woodPerSecond: 0,
    winningCondition: 0,
    timer: 0,
  });
  const [gold, setGold] = useState(50);
  const [worker, setWorker] = useState(0);
  const [goldWorker, setGoldWorker] = useState(0);
  const [goldPerSecond, setGoldPerSecond] = useState(5);

  const [wood, setWood] = useState(0);
  const [woodWorker, setWoodWorker] = useState(0);
  const [woodPerSecond, setWoodPerSecond] = useState(0);



  /* CLIKS UPDATE */ 
  function handleClickGold() {
    setGold( gold + 1)
  }
  function handleClickGoldWorker() {
    if(worker >= 1) {
    setGoldWorker(goldWorker + 1)
    setWorker(worker - 1)
    setGoldPerSecond(goldPerSecond + 0.75)
    }
  }
  function handleClickWood() {
    setWood( wood + 1)
  }
  function handleClickWorker() {
    if(gold >= 75) {
    setWorker( worker + 1)
    setGold(gold - 75)
    }
  }
  function handleClickWoodWorker() {
    if(worker >= 1) {
    setWoodWorker(woodWorker + 1)
    setWorker(worker - 1)
    setWoodPerSecond(woodPerSecond + 0.25)
    }
  }

/* RESSOURCES PER SENCODS */
useEffect(() => {
  const interval = setInterval(() => {
    setGold(gold => gold + (goldPerSecond));
    setWood(wood => wood + (woodPerSecond));
  }, 1000);

  return () => clearInterval(interval);
}, [goldWorker, goldPerSecond, woodWorker, woodPerSecond]);





  return (
    <div className="App">
      <p>{goldPerSecond} golds/seconds</p>
      <p>{woodPerSecond} golds/seconds</p>
      <p>worker</p>
      <p>{worker}</p>
      <button onClick={handleClickWorker}>buy worker</button>

      <p>Gold :</p>
      <p>{gold}</p>
      <button onClick={handleClickGold}>Mine gold</button>
      <p>{goldWorker}</p>
      <button onClick={handleClickGoldWorker}>worker to gold</button>

      <p>wood :</p>
      <p>{wood}</p>
      <button onClick={handleClickWood}>Mine wood</button>
      <p>{woodWorker}</p>
      <button onClick={handleClickWoodWorker}>worker to wood</button>
    </div>
  );
}

export default App;
