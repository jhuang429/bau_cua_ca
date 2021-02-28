export { rollDice };

function rollDice() {
    let dice1 = Math.floor(Math.random() * 6 + 1);
    let dice2 = Math.floor(Math.random() * 6 + 1);
    let dice3 = Math.floor(Math.random() * 6 + 1);
    return [dice1, dice2, dice3]
  }
