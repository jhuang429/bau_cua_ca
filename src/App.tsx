import React, {useState} from 'react';
import './App.css';
import Dice from './Components/dice'


function App() {

  let [currRoll, setCurrRoll] = useState<number[]>([1,1,1])
  let [history, setHistory] = useState<number[][]>([])

  function rollDice(){
    let dice1 = Math.floor(Math.random() * 6 + 1)
    let dice2 = Math.floor(Math.random() * 6 + 1)
    let dice3 = Math.floor(Math.random() * 6 + 1)
    setCurrRoll([dice1, dice2, dice3])
    setHistory([...history, [dice1, dice2, dice3]])

  }

  return (
    <div className="App">
      <div className="Board">
        <img src="/images/1.png" />
        <img src="/images/2.png" />
        <img src="/images/3.png" />
        <img src="/images/4.png" />
        <img src="/images/5.png" />
        <img src="/images/6.png" />
      </div>
      <div>
      <button onClick={rollDice}>Roll Dice</button>
        <div className="history">
          History:
          {history.map(arr=><Dice array={arr}/>
          )}
        </div>
      </div>
        
    </div>
  );
}

export default App;
