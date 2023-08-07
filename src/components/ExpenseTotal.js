import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const ExpenseTotal = () => {

    const { budget, remaining, currency } = useContext(AppContext);
   
    let  spent = budget - remaining;

    return (
        <div style={{margin: '1rem'}}>
        <div style={{backgroundColor: '#D0E3FF'}}>
        <div style={{marginLeft: '1rem'}}>
             Spent so far: {currency}{spent}
        </div>
        </div>
        </div>
    );
};

export default ExpenseTotal;