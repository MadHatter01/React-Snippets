import React from 'react';


function Task({ task }) {
    return (
    <li className='task-item' >
        <input type="checkbox" /><span>{task.text}</span><button className='delete-btn'>Delete</button>
    </li>)
}

export default Task;