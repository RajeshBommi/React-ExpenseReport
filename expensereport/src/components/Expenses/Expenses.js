import React, { useState } from 'react'
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

const Expenses=(props)=> {
   const [change,setFilteredYear]=useState("2020");
   const filterByYear =(selectedYear)=>{
    setFilteredYear(selectedYear);
   }
   const filteredExpense=props.items.filter((expense) =>{
    return expense.date.getFullYear().toString()===change;
   })
  return (
    <Card className='expenses'>
      <ExpenseFilter selected={change} onChangeFilter={filterByYear}/>
      {/* {filteredExpense.length === 0 ? (<p>No expense found.</p>):
      (filteredExpense.map((expense)=>
      (<ExpenseItem 
        key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
      )))} */}
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList items={filteredExpense} />      
    </Card>
  )
 }
 export default Expenses;