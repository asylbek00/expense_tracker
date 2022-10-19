import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../Expenses/ExpensesFilter";
import {useState} from 'react'
import ExpensesList from "../Expenses/ExpensesList";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('All')

  const changeSelectedYearHandler =(e)=>{
    setSelectedYear(e.target.value)
}

const fillteredExpenses = props.expenses.filter((expense)=>{
  return  expense.date.getFullYear().toString() === selectedYear
})

  return (
    <Card className="expenses">
      <ExpensesFilter
       selectedYear={selectedYear} 
       changeSelectedYear={changeSelectedYearHandler}/>
      <ExpensesList
       expenses ={props.expenses}
       fillteredExpenses={fillteredExpenses}
       setSelectedYear={selectedYear}
      />
   
    </Card>
  );
}

export default Expenses;
