import React from 'react';

function PomControler({pomoActive, startPomo, stopPomo, currentTaskIndex, tasks}){
    console.log(currentTaskIndex)
return (
    <div className='pom-controls'>
       {pomoActive ? (
        <button className='stop-btn' onClick={stopPomo}>Stop Focus</button>
       ):(
<button className='start-btn' onClick={startPomo}>Start Focus</button>
       )} 
       <div className='progress-bar'>
       <div className="progress" style={{ width: `${(currentTaskIndex / tasks.length) * 100}%` }} />

       </div>
    </div>
)
}

export default PomControler;