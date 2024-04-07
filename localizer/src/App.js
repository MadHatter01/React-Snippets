import React, {useState} from 'react';
import TranslationComponent from './components/TranslationComponent';

import './App.css'
import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";


const App = ()=>{
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) =>{
    setLanguage(event.target.value);
  }



 const handleTranslation = async (textAndSourceLanguage) => {
    const translateClient = new TranslateClient({ 
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: '[access-key-id]', 
    secretAccessKey: '[secret-access-key]',
  }
});
  
    const translateCommand = new TranslateTextCommand({
      SourceLanguageCode: "en",
      TargetLanguageCode: "fr",
      Text: "This is a sample text",
    });
  
    const { TranslatedText } = await translateClient.send(translateCommand);
    console.log(TranslatedText)
    return { translated_text: TranslatedText };
  };

handleTranslation('en')
// console.log(fetchTranslations('fr'))
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