
import React from "react";
import './../styles/App.css';
import { useState } from "react/cjs/react.production.min";

const App = () => {

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]); 

  let createTask = (e) =>{

    setTasks([...tasks, inputValue]);
    setInputValue("");
  }

  return (
    <div>
        <label>To-Do List</label>
        <input 
        type="text" 
        value={inputValue} // Set input value to state value
        onChange={(e) => setInputValue(e.target.value)} // Update state with input value
      /> 
        <button onClick={createTask}>Add Todo</button>
        <ul>{tasks.map((task, index) => (<li key={index}>{task}</li>))}</ul>
    </div>
  )
}

export default App
