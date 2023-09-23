import React, { useEffect, useState } from 'react';
import data from "./assets/data.json";

import './App.css';

const genre = "Rock";

function App() {
  const [name, setName] = useState("");
  const [inp, setInp] = useState("");

  const [isGenre, setIsGenre] = useState("unknown");
  const [funMsg, setFunMsg] = useState("");
  const [also, setAlso] = useState("");

  useEffect(() => {
    // Loop through data
    for (let index = 0; index < data.length; index++) {
      const element = data[index];

      // Check if name matches to an element
      if (name.toLowerCase() === element.name.toLowerCase()) {
        // Show response
        setIsGenre(element.isGenre === true ? "yes" : "no");
        setFunMsg(element.funMsg);
        setAlso(element.also)
        break
      }
      
      // Unknown response
      setIsGenre("unknown");
      setFunMsg("We'll check on this band soon.");
      setAlso("");
    }
  },[name])
  

  return (
    <div className='app'>
      <h1>Is this band genre?</h1>
      <div className='input-group'>
        <input className='form-control' placeholder='Band name' onChange={(e) => setInp(e.target.value)}></input>
        <span className='input-group-btn'>
          <button className='btn btn-success mc-submit' onClick={() => setName(inp)}>Find Out</button>
        </span>
      </div>
      <div className='result'>
        <h2>
          {
            // Quite the cluser. So, we check if the name is not empty then we can give a response depending on whether it is on our system, it is in the genre.
            name !== "" ? name + (isGenre !== "unknown" ? (isGenre === "yes" ?  " is a " : " is not a ") + genre + " band." : " is not in our system.") : ""
          }
          </h2>
        <h3>{name !== "" ? funMsg : ""}</h3>
        <h4>{also !== "" ? (isGenre === "yes" ? "They are also " + also + "." : name + " is " + also + ".") : ""}</h4>
      </div>
    </div>
  );
}

export default App;
