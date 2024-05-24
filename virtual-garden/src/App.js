import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Toolbar from './components/Toolbar';
import html2canvas from 'html2canvas';


function App() {

  const [elements, setElements] = useState([]);
  const [timerRunning, setTimerRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [secondsPassed, setSecondsPassed] = useState(0);
  const pageRef = useRef();

  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.style.minHeight = '100vh';
    }
  }, []);


 const takeScreenshot = async ()=>{
if(pageRef.current){

  const canvas = await html2canvas(pageRef.current, { useCORS: true,
    foreignObjectRendering: true,
    windowWidth: document.documentElement.scrollWidth,
    windowHeight: document.documentElement.scrollHeight ,
    scrollX: window.scrollX,
    scrollY: window.scrollY+100});
  const imgData = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = imgData;
  link.download = 'screen.png';
  document.body.appendChild(link);
  link.click();
  // document.body.removeChild(link);
}

 }
  const startFocusTimer = ()=>{
    const element = document.getElementById('start');

    element.style.backgroundColor='rgb(79, 12, 204)';
    element.style.color = '#fff'
    element.innerText='Started'
    // element.setAttribute('class',element.getAttribute('class')+ ' started')
    if(!timerRunning){
      const startTime = Date.now();

      const id = setInterval(()=>{
        const randomElement = getRandomElement();
        setElements(prevElements => {
          const color = getRandomColor();
          const x = Math.floor(Math.random() * window.innerWidth);
          const y = Math.floor(Math.random() * window.innerHeight);
          const newElement = { type: randomElement, color, id: Date.now(), x, y };
          // const elapsedTime = Math.floor((Date.now() - startTime) / 1000); 
          const elapsedTime = Math.floor((Date.now() - startTime))
          setSecondsPassed(elapsedTime);
          return [...prevElements, newElement];
        });
      }, 60000);
      setIntervalId(id);
      setTimerRunning(true);
    }
 
  }

  const stopFocusTimer = ()=>{
    const element = document.getElementById('start');

    element.style.color='rgb(79, 12, 204)';
    element.style.backgroundColor = '#fff'
    element.innerText='Start'
    
    if(timerRunning){
      clearInterval(intervalId);
      setIntervalId(null);
      setTimerRunning(false);
    }
  }

  const getRandomElement = () => {
    const elementTypes = ['flower', 'tree', 'decoration'];
    return elementTypes[Math.floor(Math.random() * elementTypes.length)];
  };


  const handleAddElement = (type) => {
    const color = getRandomColor();
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const newElement = { type, color, id: Date.now(), x, y };
    // const newElement = { type, color, id: Date.now() };
    setElements([...elements, newElement]);
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handleRemoveElement = (id) => {
 
    const updatedElements = elements.filter((element) => element.id !== id);
    setElements(updatedElements);
  };



  return (
    <div className="App" ref={pageRef}>

      <Toolbar onAddElement={handleAddElement} startFocusTimer={startFocusTimer} stopFocusTimer={stopFocusTimer} takeScreenshot={takeScreenshot}/>
      <Canvas  elements={elements} onRemoveElement={handleRemoveElement} />
{secondsPassed} seconds
    </div>
  );
}

export default App;
