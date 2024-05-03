import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';
import React, {useState, useEffect} from 'react'
import PomControler from './components/PomControler';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("")
  const [pomoActive, setPomActive] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const handleTaskAdd = ()=>{
    if(inputValue.trim()!==''){
      setTasks(prevTasks => [...prevTasks, {id: Date.now(), text:inputValue}]);
      setInputValue('');
    }
  }
  
  const startPomo = ()=>{
    setPomActive(true)
  }

  const stopPomo = ()=>{
    setPomActive(false)
  }

  useEffect(() => {
    let timer;
    if (pomoActive && tasks[currentTaskIndex]) {
      timer = setTimeout(() => {
        setCurrentTaskIndex(currentTaskIndex + 1);
      }, 5000); 
    }
    return () => clearTimeout(timer);
  }, [pomoActive, tasks, currentTaskIndex]);
  return (
    <div className="App">
      <h1>Focus Work</h1>
      <div className='input-container'>
        <input type="text" placeholder='Enter Task' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
        <button className='add-task-btn' onClick={handleTaskAdd}>Add Task</button>
      </div>
      <TaskList tasks = {tasks} currentTaskIndex={currentTaskIndex} />
      {tasks.length > 0 &&(
        <PomControler pomoActive={pomoActive} startPomo={startPomo} stopPomo={stopPomo} currentTaskIndex =  {currentTaskIndex} tasks={tasks}/>
      )}
    </div>
  );
}

export default App;
