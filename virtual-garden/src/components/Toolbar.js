import React from 'react';


const Toolbar = ({ onAddElement, startFocusTimer, stopFocusTimer, takeScreenshot }) => {

  return (
    <div className="toolbar" >
      {/* <button className="primary-btn" onClick={() => onAddElement('flower')} >Add Flower</button>
      <button className="primary-btn" onClick={() => onAddElement('tree')}>Add Tree</button>
      <button className="primary-btn" onClick={() => onAddElement('decoration')}>Add Decoration</button> */}
      <div className='customTime'>
<h1>Focus Timer</h1>  
<button type="button" id="start" className='primary-btn focus' onClick={startFocusTimer}>Start</button>
<button type="button" className='primary-btn focus' onClick={stopFocusTimer}>stop</button>
<button type="button" className='screenshot secondary-btn' onClick={takeScreenshot}>Take Screenshot</button>
      </div>
    </div>
   
  );
};

export default Toolbar;
