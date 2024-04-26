import { useState } from 'react';
import './App.css';
import Canvas from './components/Canvas';
import Header from './components/Header';
import Toolbar from './components/Toolbar';

function App() {

  const [elements, setElements] = useState([]);

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
    console.log(updatedElements)
    setElements(updatedElements);
  };



  return (
    <div className="App">
      {/* <Header /> */}

      <Toolbar onAddElement={handleAddElement} />
      <Canvas elements={elements} onRemoveElement={handleRemoveElement} />

    </div>
  );
}

export default App;
