
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Remaining = () => {

    const { budget, remaining, currency } = useContext(AppContext);

    return (
        <div style={{margin: '1rem'}}>
        <div style={{backgroundColor: '#D2E8DE'}}>
        <div style={{marginLeft: '1rem'}}>
             Remaining: {currency}{remaining}
        </div>
        </div>
        </div>
    );
};

export default Remaining;