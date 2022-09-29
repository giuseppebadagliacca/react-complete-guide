import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>{
  const onSaveExpensesDataHander = (enteredExpenseData) =>{
    const expenseData = {...enteredExpenseData,id: Math.random().toString()};

    props.onaddExpense(expenseData);
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpensesData={onSaveExpensesDataHander}/>
    </div>
  )
}

export default NewExpense;