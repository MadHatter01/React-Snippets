import React, {useState} from 'react';
import TranslationComponent from './components/TranslationComponent';
import './App.css'

const App = ()=>{
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) =>{
    setLanguage(event.target.value);
  }


const translations = require(`../public/translations/${language}.json`)

return (
  <div>
    <h2>Select a language</h2>
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
    <hr />
    <TranslationComponent translations={translations} lang = {language}/>
  </div>
)
}

export default App;