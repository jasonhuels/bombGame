import React from "react";
import defusers from '../js/Library.js'

function Defuse(props) {
  return (
    <div>
      <form onSubmit={(event)=> {event.preventDefault(); defusers[0].checkPass((document.getElementById("password").value), props.password)}}>
        <input id="password"/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Defuse;