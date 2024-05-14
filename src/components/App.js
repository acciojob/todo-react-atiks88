
import React from "react";
import './../styles/App.css';
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const [inputValue, setInputValue] = useState(""); 
  const [tasks, setTasks] = useState([]);

  const createTask = () => {
    setTasks([...tasks, inputValue]);
    setInputValue("");
  }
  const DeleteBtn =(index)=>{
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
    <div>
      <label>To-Do List</label>
      <input 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      /> 
      <button onClick={createTask}>Add Todo</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}<button onClick={() => DeleteBtn(index)}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App
