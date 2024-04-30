import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Focus Work</h1>
      <div className='input-container'>
        <input type="text" placeholder='Enter Task' />
        <button className='add-task-btn'>Add Task</button>
      </div>
      <TaskList />
    </div>
  );
}

export default App;
