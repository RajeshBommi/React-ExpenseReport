import React, { useState } from 'react'
import './ExpenseForm.css';

function ExpenseForm(props) {
    const [enteredTitle,setenteredTitle]=useState('');
    const [enteredAmount,setenteredAmount]=useState('');
    const [enteredDate,setenteredDate]=useState('');
    // const [userInput,setuserInput]=useState({
    //     enteredTitle: '',
    //     enterresAmount: '',
    //     enteredDate:'',
    // });

      const titlechangerhandler=(event)=>{
        setenteredTitle(event.target.value);
        // setuserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        //  } );
        // setuserInput((prevstate)=>{
        //     return{...prevstate, enteredTitle:event.target.value};
        // })
      };
        const amountchangehandler=(event)=>{
            setenteredAmount(event.target.value);
            // setuserInput({
            //     ...userInput,
            //     enteredAmount: event.target.value,
            //  } );
        };
        const datechangehandler=(event)=>{
            setenteredDate(event.target.value);
        //     setuserInput({
        //         ...userInput,
        //         enteredDate: event.target.value,
        // });
        }
      const submitHandler=(event)=>{
          event.preventDefault();
          const expenseData= {
              title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
          }
          props.onSaveExpenseData(expenseData);
          setenteredTitle('');
          setenteredAmount('');
          setenteredDate('');
      }
    
  return (
    
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
        <div className='new-expense__control'>
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titlechangerhandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Amount</label>
        <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountchangehandler}/>
        </div>
        <div className='new-expense__control'>
        <label>Date</label>
        <input type='date' min="2019-10-23" max="2022-13-10" value={enteredDate} onChange={datechangehandler}/>
        </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
         </form>
  )
}


export default ExpenseForm