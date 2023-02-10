import './App.css';
import React, { useState, useEffect } from 'react';
// import BtnClicker from './components/BtnClicker.js';

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
  const [gold, setGold] = useState(75);
  const [goldWorker, setGoldWorker] = useState(0);

  const [wood, setWood] = useState(0);
  const [woodWorker, setWoodWorker] = useState(0);

  const [fighter, setFighter] = useState(0);
  const [healer, setHealer] = useState(0);
  const [worker, setWorker] = useState(0);

  const[bossHp, setBossHp] = useState(100);
  const[bossAttack, setBossAttack] = useState(4);
  // const[bossHeal, setBossHeal] = useState(0);

  const[playerHp, setPlayerHp] = useState(100);


  /* CLIKS UPDATE */ 
  function handleClickGold() {
    setGold( gold + 1)
  }
  function handleClickGoldWorker() {
    if(worker >= 1) {
    setGoldWorker(goldWorker + 1)
    setWorker(worker - 1)
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

  function handleClickFighter() {
    if(gold >= 75 && wood >= 75) {
    setFighter( fighter + 1)
    setGold(gold - 75)
    setWood(wood - 75)
    }
  }

  function handleClickHealer() {
    if(gold >= 75 && wood >= 75) {
    setHealer( healer + 1)
    setGold(gold - 75)
    setWood(wood - 75)
    }
  }


  function handleClickWoodWorker() {
    if(worker >= 1) {
    setWoodWorker(woodWorker + 1)
    setWorker(worker - 1)
    }
  }

/* RESSOURCES PER SENCODS */

function incom(resource) {
  if (resource === "gold" ) {
    let resourceIncom = goldWorker * 5;
    return resourceIncom
  }
  if (resource === "wood" ) {
    let resourceIncom = woodWorker * 3;
    return resourceIncom
  }
}

function combat(resource) {
  if (resource === "heal" ) {
    let healIncom = healer;
    return healIncom
  }
  if (resource === "damage" ) {
    let damageIncom = fighter;
    return damageIncom
  }
}

useEffect(() => {
  const interval = setInterval(() => {
    setGold(gold => gold + incom("gold"));
    setWood(wood => wood + incom("wood"));
  }, 1000);

  return () => clearInterval(interval);
}, [goldWorker, woodWorker]);


useEffect(() => {
  const interval = setInterval(() => {
    setBossHp(bossHp => bossHp - combat("damage"));
    setPlayerHp(playerHp => playerHp - bossAttack + combat("heal"));
  }, 4000);

  return () => clearInterval(interval);
}, [bossHp, playerHp, bossAttack]);





  return (
    <div className="App">
      <div className='header'>
        <div>
          <h4>{incom("gold")} gold/seconds</h4>
          <h4>{incom("wood")} wodd/seconds</h4>
          <h4>{combat("damage")} damage/seconds</h4>
          <h4>{combat("heal")} heal/seconds</h4>
        </div>


        <div>
          <h2>worker</h2>
          <p>{worker}</p>
          <button onClick={handleClickWorker}>buy worker</button>
        </div>

        <div>
          <h2>fighter</h2>
          <p>{fighter}</p>
          <button onClick={handleClickFighter}>buy fighter</button>
        </div>

        <div>
          <h2>healer</h2>
          <p>{healer}</p>
          <button onClick={handleClickHealer}>buy healer</button>
        </div>

        <div>
          <h2>Gold :</h2>
          <p>{gold}</p>
          <button onClick={handleClickGold}>Mine gold</button>
          <p>{goldWorker}</p>
          <button onClick={handleClickGoldWorker}>worker to gold</button>
        </div>

        <div>
          <h2>wood :</h2>
          <p>{wood}</p>
          <button onClick={handleClickWood}>Mine wood</button>
          <p>{woodWorker}</p>
          <button onClick={handleClickWoodWorker}>worker to wood</button>
        </div>
      </div>

      <div>
        <h1>player hp : {playerHp}</h1>
        <h1>boss hp : {bossHp}</h1>
      </div>
    </div>
  );
}

export default App;
