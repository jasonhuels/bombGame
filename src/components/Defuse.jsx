import React from "react";

function Defuse() {

  function checkPassword(input){
    if(input === "hello"){
      console.log("You did it!");
    }
  }

  return (
    <div>
      <h1>I am an Defuser</h1>
      <form onSubmit={(event)=> {event.preventDefault(); checkPassword(document.getElementById("password").value)}}>
        <input id="password"/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Defuse;