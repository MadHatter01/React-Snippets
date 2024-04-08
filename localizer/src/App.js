import React, {useState, useEffect} from 'react';
import TranslationComponent from './components/TranslationComponent';

import './App.css'
import {
  TranslateClient,
  TranslateTextCommand,
  
} from "@aws-sdk/client-translate";

import {
  ComprehendClient, DetectDominantLanguageCommand
} from "@aws-sdk/client-comprehend"

const App = ()=>{
  const [language, setLanguage] = useState('en');
const [translations, setTranslations] = useState({})
  const handleLanguageChange = (event) =>{

    setLanguage(event.target.value);
  }



const detectLanguageComp = ()=>{
  const comprehendClient = new ComprehendClient({region: "us-east-1",
  credentials: {
    accessKeyId: '[access-id]',
    secretAccessKey: '[access-secret]',
  } });

  const textToDetect = "Hello, what's up?"

  async function detectLanguage() {
    try {
        const data = await comprehendClient.send(new DetectDominantLanguageCommand({
            Text: textToDetect
        }));
        console.log(data)
        console.log("Detected language code:", data.Languages[0].LanguageCode);
        console.log("Detected language:", data.Languages[0].Score);
    } catch (error) {
        console.error("Error detecting language:", error);
    }
}

detectLanguage();
}


useEffect(() => {
  const fetchTranslations = async () => {
    try {
      const translateClient = new TranslateClient({
        region: "us-east-1",
        credentials: {
          accessKeyId: '[access-id]',
          secretAccessKey: '[access-secret]',
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
  detectLanguageComp()
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