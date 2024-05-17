import React from 'react';


const Toolbar = ({ onAddElement, startFocusTimer, stopFocusTimer }) => {
 
  return (
    <div className="toolbar">
      {/* <button className="primary-btn" onClick={() => onAddElement('flower')} >Add Flower</button>
      <button className="primary-btn" onClick={() => onAddElement('tree')}>Add Tree</button>
      <button className="primary-btn" onClick={() => onAddElement('decoration')}>Add Decoration</button> */}
      <div className='customTime'>
<p>Focus Timer:</p>  
<button type="button" id="start" className='primary-btn focus' onClick={startFocusTimer}>Start</button>
<button type="button" className='primary-btn focus' onClick={stopFocusTimer}>stop</button>
      </div>
    </div>
   
  );
};

export default Toolbar;
