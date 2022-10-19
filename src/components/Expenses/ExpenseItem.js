import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {
  const [newTitle, setNewTitle] = useState("");

  function changedTitle() {
    setNewTitle("+");
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">{props.expensePrice}сом</div>
        <h4>{newTitle}</h4>
        <button onClick={changedTitle}>статус</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
