import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline   } from 'react-icons/io';

const ExpenseItem = (props) => {

    const {dispatch, currency } = useContext(AppContext);

    const handleDeleteItem = ()=>    {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.name
        });
    };

    const handleIncrease = ()=>    {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: "ADD_EXPENSE",
            payload: item
        });
    };

    const handleDecrease = ()=>    {
        const item = {
            name: props.name,
            cost: 10
        };

        dispatch({
            type: "RED_EXPENSE",
            payload: item
        });
    };

    return(
        <tr>
            <td>{props.name}</td> 
            <td>{props.cost}</td> 
            <td><IoIosAddCircleOutline  color='green'  size='2.2rem' onClick={handleIncrease}/></td> 
            <td><IoIosRemoveCircleOutline color='green'  size ='2.2rem' onClick={handleDecrease}/></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}/></td>
        </tr>
    );
    
};

export default ExpenseItem;
