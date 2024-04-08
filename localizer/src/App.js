import React, {useState, useEffect} from 'react';
import TranslationComponent from './components/TranslationComponent';

import './App.css'
import {
  TranslateClient,
  TranslateTextCommand,
} from "@aws-sdk/client-translate";


const App = ()=>{
  const [language, setLanguage] = useState('en');
const [translations, setTranslations] = useState({})
  const handleLanguageChange = (event) =>{

    setLanguage(event.target.value);
  }


useEffect(() => {
  const fetchTranslations = async () => {
    try {
      const translateClient = new TranslateClient({
        region: "us-east-1",
        credentials: {
          accessKeyId: '[access-key-id]',
          secretAccessKey: '[access-secret-key]',
        }
      });

      const sampleText = {
        "greeting": "Hello, World!",
        "instruction": "Click the button below to continue."
      };

      const translateCommandGreeting = new TranslateTextCommand({
        SourceLanguageCode: "en",
        TargetLanguageCode: language,
        Text: sampleText.greeting,
      });

      const translateCommandInstruction = new TranslateTextCommand({
        SourceLanguageCode: "en",
        TargetLanguageCode: language,
        Text: sampleText.instruction,
      });

      const { TranslatedText: translatedGreeting } = await translateClient.send(translateCommandGreeting);
      const { TranslatedText: translatedInstruction } = await translateClient.send(translateCommandInstruction);

      setTranslations({
        translated_greeting: translatedGreeting,
        translated_instruction: translatedInstruction
      });
    } catch (error) {
      console.error('Error fetching translations:', error);
    }
  };

  fetchTranslations();
}, [language]);

// console.log(fetchTranslations('fr'))

// Simulated json file for translations
// const translations = require(`../public/translations/${language}.json`)

return (
  <div>
    <h2>Select a language</h2>
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
    <hr />
    {/* <TranslationComponent translations={translations} lang = {language}/> */}
    <TranslationComponent translations={translations} lang={language} />
  </div>
)
}

export default App;