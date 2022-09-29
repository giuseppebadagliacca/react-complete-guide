import React, { useState } from 'react';
import './NewExpense.css';

const ExpenseForm = (props) => {
  //eslint-disable-next-line
  const [enteredTitle, setEnteredTitle]= useState('');
  //eslint-disable-next-line
  const [enteredAmount, setEnteredAmount]= useState('');
  //eslint-disable-next-line
  const [enteredDate, setEnteredDate]= useState('');

  const titleChangeHandler = (event) =>{
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) =>{
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) =>{
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };
    
    props.onSaveExpensesData(expenseData);
    
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
        <div className='new-expense__actions'>
          <button type='submit' >Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm;