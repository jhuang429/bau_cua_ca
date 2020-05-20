import React, {useState} from 'react';

function Dice(props: {array:any, index:number}) {
  return (
    <div className="set">
        {props.index ?`${props.index}.`: "last"}<img className="dice" src={`/images/${props.array[0]}.png`} />
        <img className="dice"src={`/images/${props.array[1]}.png`} />
        <img className="dice"src={`/images/${props.array[2]}.png`} />
    </div>
  );
}

export default Dice;
