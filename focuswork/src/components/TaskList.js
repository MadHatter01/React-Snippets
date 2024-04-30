import React from 'react';
import Task from './Task';

const TaskList = (({tasks})=>{
    return (
        <ul className='task-list'>
            {tasks.map((task, index) => (
                <Task key={task.id} task = {task} />
            ))}
          
        </ul>
    )
})

export default TaskList;