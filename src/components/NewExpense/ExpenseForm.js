import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState(""); //инпутка жазылган данныйды useState привязка кылуу(3). useStaти озгорттсок инпуттуку да озгорот.

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    // setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {     //Открыли обьект чтобы все данные дать вместо!                      
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    const isFormFilled = Object.values(userInput).some((value) => !value)  //валидация. фолс болсо тру кайтар
    if(isFormFilled) return alert('Заполните все поля!')

    props.onSaveExpenseData(expenseData); //сабмит болгондо onSaveExpenseData(переменный) ке привязка болгон ф-я иштейт(saveExpenseDataHandler). А мы его вызываем через пропс. Т.е lifting up. New Expense ке чыгарып бердик
    setUserInput({     //чтобы очистить value после add
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Название:</label>
          <input
            type="text"
            value={userInput.enteredTitle} //
            onChange={titleChangeHandler} //
          />
        </div>
        <div className="new-expense__control">
          <label>Цена:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Дата:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2025-12-31"
            value={userInput.ReactenteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Добавить расход</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
