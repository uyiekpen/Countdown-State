import React, { useState, useEffect } from "react";


function CountDown({name,task}) {
  const [input, setInput] = useState(0);
  const [counting, setCounting] = useState(false);
  const [show, setShow] = useState(false);
  const [timerName, setTimerName] = useState([]);


  useEffect(() => {
    const inputNumb = parseInt(input);
    if (counting && inputNumb > 0) {
      return setTimeout(() => {
        setInput(inputNumb - 1);
      }, 1000);
    } else {
      if (show) {
        alert("Your time is up");
        setShow(false);
      }
      setCounting(false);
    }
  }, [counting, input]);


  return (
    <div style={{
     
    }}>
      <h3>{name}</h3>
      <h3>{task}</h3>
      <form>
        <input
          disabled={counting}
          placeholder="Enter the time"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
         <button
          onClick={(e) => {
            e.preventDefault();
            setCounting(true);
            setShow(true);
          }}
        >
          Enter
        </button>
        <h1>{input}</h1>
       
      </form>
      
    </div>
  )
}

export default CountDown
