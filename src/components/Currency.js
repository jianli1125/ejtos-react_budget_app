
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {

    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (curr) =>
    {
        dispatch(
            {
                type: 'CHG_CURRENCY',
                payload: curr
           }
        );
    };

    const fontStyle = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '##ffffff',
      };

    const currencyLabel = "Currency (" + ")";

    return (
        <div style={{margin: '1rem'}}>
        <div style={{backgroundColor: '#93E499'}}>
        <div style={{marginLeft: '1rem', backgroundColor: '#93E499', color: 'white'}}>
          <select id="dropdown" style={{color: 'white', backgroundColor: '#93E499'}} onChange={event=>changeCurrency(event.target.value)}> {currencyLabel}
            <option value='$'>$ Dollar</option>
            <option value="£" selected>£ Pound</option>
            <option value="€">€ Euro</option>
            <option value='₹'>₹ Ruppee</option>
          </select>
        </div>
        </div>
        </div>
    );
};

export default Currency;