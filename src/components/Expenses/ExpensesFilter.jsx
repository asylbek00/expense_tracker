import React from 'react'
import './ExpensesFilter.css'

const ExpensesFilter = ({selectedYear,changeSelectedYear}) => {
   
  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Фильтровать по году</label>
            <select value={selectedYear} onChange={changeSelectedYear}>
                <option value='All'>Выбрать все:</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
            </select>
        </div>
        
    </div>
  )
}

export default ExpensesFilter