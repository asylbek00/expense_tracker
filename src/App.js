import { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "На продукты",
    amount: 4000,
    date: new Date(2024, 7, 14),
  },
  { id: "e2", title: "На телевизор", amount: 9000, date: new Date(2022, 2, 12) },
  {
    id: "e3",
    title: "Ремонт автомобиль",
    amount: 3000,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "Стиральная машина",
    amount: 17000,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(expenses); //инф-ны тудуга киргизуу учун

  const addExpenseHandler = (expense) => {
    
    setNewExpenses((prevExpense) => {  //жаны mассив
      return [expense, ...prevExpense];
    });
  };
  return (
    <div className="App">
      <h1>Расходы:</h1> <hr/>
      <NewExpense onAddExpense={addExpenseHandler} title="hello" />
      <Expenses expenses={newExpenses} />
    </div>
  );
}

export default App;
