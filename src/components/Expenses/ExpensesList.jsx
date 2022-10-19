import React from "react";
import './ExpensesList.css'
import ExpenseItem from '../Expenses/ExpenseItem'

const ExpensesList = ({expenses , fillteredExpenses ,selectedYear}) => {
    const getCurrentExpenses = ()=>{
        if (selectedYear ==='All') {
            return expenses
        }
        return fillteredExpenses
    }
    const renderedExpenses = getCurrentExpenses()

    if(renderedExpenses.length === 0){
      return <h2 className="expenses-list__fallback">Расход не найден!</h2>
    }
  return (
  <ul className="expenses-list">
       {renderedExpenses.map((expenses, i) => {
        return (
          <ExpenseItem
            key = {expenses.id}                 //map кылганла key атрибутту жазабыз
            expenseTitle={expenses.title}
            expensePrice={expenses.amount}
            expenseDate={expenses.date}
          />
        );
      })}

  </ul>
  )
};

export default ExpensesList;
