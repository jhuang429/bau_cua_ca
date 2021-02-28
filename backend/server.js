import express from "express";
import cors from "cors"
var app = express();
import {rollDice} from './gamelogic.js';

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/play', function (req, res) {
    let result = JSON.stringify(rollDice())
    console.log(result)
    res.send(result);
  });

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});