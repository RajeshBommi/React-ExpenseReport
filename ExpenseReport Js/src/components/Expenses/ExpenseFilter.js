import React from 'react'
import './ExpenseFilter.css';

function ExpenseFilter(props) {
    const dropdownchanger=(event)=>{
        props.onChangeFilter(event.target.value);
    }
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter By year</label>
            <select value={props.select} onChange={dropdownchanger}>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter