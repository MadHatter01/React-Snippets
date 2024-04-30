import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import React, {useState} from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("")

  const handleTaskAdd = ()=>{
    if(inputValue.trim()!==''){
      setTasks(prevTasks => [...prevTasks, {id: Date.now(), text:inputValue}]);
      setInputValue('');
    }
  }
  
  return (
    <div className="App">
      <h1>Focus Work</h1>
      <div className='input-container'>
        <input type="text" placeholder='Enter Task' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button className='add-task-btn' onClick={handleTaskAdd}>Add Task</button>
      </div>
      <TaskList tasks = {tasks} />
    </div>
  );
}

export default App;
