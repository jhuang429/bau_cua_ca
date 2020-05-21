import React, { useState } from "react";
import "./App.css";
import Dice from "./Components/dice";

function App() {
  let [currRoll, setCurrRoll] = useState<[number,number,number]>([1, 1, 1]);
  let [history, setHistory] = useState<number[][]>([]);
  let [bet, setBet] = useState<any>({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
  let [money, setMoney] = useState<number>(100);
  let [message, setMessage] = useState("")

  function rollDice() {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    let dice3 = Math.floor(Math.random() * 6 + 1);
    setCurrRoll([dice1, dice2, dice3]);
    setHistory([[dice1, dice2, dice3], ...history]);

    calcWinnings([dice1, dice2, dice3]);
  }

  function addbet(num: number) {
    setBet({ ...bet, [num]: bet[num] + 1 });
    setMoney(money - 1);
  }

  function calcWinnings(dices: number[]) {
    let totalBet = 0;
    for (let animal in bet) {
      totalBet += bet[animal];
    }

    let winnings = 0;
    let orginalBet: { [key: number]: number } = {};

    for (let die of dices) {
      winnings += bet[die];
      orginalBet[die] = bet[die];
    }
    let moneyBack = winnings;

    for (let animal in orginalBet) {
      moneyBack += bet[animal];
    }

    setMoney(money + moneyBack);
    setBet({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 });
    setMessage(winnings? `you won ${winnings}`: `you lost ${totalBet}`)
  }

  return (
    <div className="App">
      <div className="Board">
        <img onClick={() => addbet(1)} src="/images/1.png" />
        <img onClick={() => addbet(2)} src="/images/2.png" />
        <img onClick={() => addbet(3)} src="/images/3.png" />
        <img onClick={() => addbet(4)} src="/images/4.png" />
        <img onClick={() => {
          return addbet(5);
        }} src="/images/5.png" />
        <img onClick={() => addbet(6)} src="/images/6.png" />
      </div>
      <div className="console">
        <div className="history">
          <button onClick={rollDice}>Roll Dice</button>
          <div></div>
          History:
          {history.map((arr, index) => (
            <Dice array={arr} index={index} />
          ))}
        </div>

        <div className="bets">
          bets:
          <div>Shrimp: {bet[1]}</div>
          <div>Crab: {bet[2]}</div>
          <div>Fish: {bet[3]}</div>
          <div>Stag: {bet[4]}</div>
          <div>Gourd: {bet[5]}</div>
          <div>Chicken: {bet[6]}</div>
        </div>
        <div className="money">
        money: <div>{money}</div>
        last roll: {message}
        </div>
      </div>
    </div>
  );
}

export default App;
