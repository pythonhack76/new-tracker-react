import React , { createContext , useReducer } from 'react';
import AppReducer from './AppReducer';
//Initial state

const initialState = {

    transactions: [
        {id: 1, text: 'Notebook', amount: -10},
        {id: 2, text: 'hardware', amount: 300},
        {id: 3, text: 'mouse', amount: -50},
        {id: 4, text: 'monitor', amount: 100},
        {id: 5, text: 'keyboard', amount: 120}


    ]

} 

// creat cpmtestp

export const GlobalContext = createContext(initialState);

// Provider component

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id) {
        dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>);

}
