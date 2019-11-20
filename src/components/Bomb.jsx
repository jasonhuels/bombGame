import React from "react";
import Moment from "moment";

function Bomb(props) {
    if(!props.timerStarted) {
    return(
      <div>
        <h1>I am a bomb</h1>
        
        <button onClick={()=> {
          props.startTimer()
          }
        }
          >Start Game</button>
      
      </div>
    );
  } else {
    return(
      <div>
        <p>Timer: {props.counter}</p>
      </div>
    )
  }
}


export default Bomb;