
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {

    const { budget, remaining, currency, dispatch } = useContext(AppContext);

    const spent = budget - remaining;

    const setBudget = (val) =>
    {
        if (val < spent) 
        {
            alert("You can't reduce the budget value lower than the expending");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: val
        });
    };

    return (

        <div style={{margin: '1rem'}}>
        <div>
             Budget: {currency}
             <input type="number" min="0" max="20000" step="10" value={budget} onChange={event=>setBudget(event.target.value)}/>
        </div>
        </div>
    );
};

export default Budget;