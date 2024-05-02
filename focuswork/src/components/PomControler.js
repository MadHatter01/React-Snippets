import React from 'react';

function PomControler({pomoActive, startPomo, stopPomo, currentIndex, tasks}){
return (
    <div className='pom-controls'>
       {pomoActive ? (
        <button className='stop-btn' onClick={stopPomo}>Stop Focus</button>
       ):(
<button className='start-btn' onClick={startPomo}>Start Focus</button>
       )} 
       <div className='progress'>

       </div>
    </div>
)
}

export default PomControler;