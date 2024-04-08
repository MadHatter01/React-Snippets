import React from 'react';

const TranslationComponent = ({translations, lang}) =>{
return (
   
    <div lang={lang}>
        <h2>{translations.translated_greeting}</h2>
        <p>{translations.translated_instruction}</p>
    </div>
)
}

export default TranslationComponent