import React from 'react';

const TranslationComponent = ({translations, lang}) =>{
return (
   
    <div lang={lang}>
        <h2>{translations.greeting}</h2>
        <p>{translations.instruction}</p>
    </div>
)
}

export default TranslationComponent