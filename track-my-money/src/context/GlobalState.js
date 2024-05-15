import React, {createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions : [
        {id : 1, item : 'Food', amount : -50},
        {id : 2, item: 'Salary', amount: 2500},
        {id: 3, item: 'Clothes', amount: -40},
        {id: 4, item: 'Investment', amount: 100}
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value = {{transactions:state.transactions}}>
        {children}
    </GlobalContext.Provider>)
}
