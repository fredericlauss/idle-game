import '../App.css';
import React, { useState, useEffect } from 'react';


function Board(props) {

    const [gold, setGold] = useState(50);
    const [goldWorker, setGoldWorker] = useState(0);
  
    const [wood, setWood] = useState(0);
    const [woodWorker, setWoodWorker] = useState(0);
  
    const [fighter, setFighter] = useState(0);
    const [healer, setHealer] = useState(0);
    const [worker, setWorker] = useState(0);
  
    const[bossHp, setBossHp] = useState(100);
    const[bossAttack] = useState(6);
    // const[bossHeal, setBossHeal] = useState(0);
  
    const[seconds, setseconds] = useState(0);

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
      let healIncom = healer / 4;
      return healIncom
    }
    if (resource === "damage" ) {
      let damageIncom = fighter;
      return damageIncom
    }
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setseconds(seconds => seconds + 1)
      if (seconds === 4) {
        setseconds(0);
        setBossHp(bossHp => bossHp - combat("damage"));
        setPlayerHp(playerHp => playerHp - bossAttack);
      }
      setGold(gold => gold + incom("gold"));
      setWood(wood => wood + incom("wood"));
      setPlayerHp(playerHp => playerHp + combat("heal"));
      if (playerHp <= 0) {
        props.setWinner("boss")
      }
      if (bossHp <= 0) {
        props.setWinner("player")
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, [bossHp, playerHp, bossAttack, props.setWinner, setBossHp, setPlayerHp, goldWorker, woodWorker, seconds, setseconds]);



  /* HEALING */ 


  return (
    <>
        <div className='header'>
                <div>
                <h4>{incom("gold")} gold/seconds</h4>
                <h4>{incom("wood")} wodd/seconds</h4>
                <h4>{combat("damage")} damage/4seconds</h4>
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
      </>
  );
}

export default Board;