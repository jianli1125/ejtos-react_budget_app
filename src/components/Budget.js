
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {

    const { budget, currency, dispatch } = useContext(AppContext);

    const setBudget = (val) =>
    {
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