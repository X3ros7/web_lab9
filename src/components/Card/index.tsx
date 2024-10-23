import React, { useState } from "react";
import Expenses from "../Expenses";
import styles from "./Card.module.css";
import ExpenseForm from "../ExpenseForm";

const Card = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  function addExpenseHandler(expense: Expense) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      { ...expense, id: Math.random().toString() },
    ]);
  }

  return (
    <div className={styles.card}>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default Card;
