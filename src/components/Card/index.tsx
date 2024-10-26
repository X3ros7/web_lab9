import React, { useState } from "react";
import Expenses, { Expense } from "../Expenses";
import styles from "./Card.module.css";
import ExpenseForm from "../ExpenseForm";
import Hystogram from "../Hystogram";
import Filter from "../Filter";

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
  const [selectedYear, setSelectedYear] = useState("2021");
  const [isFormVisible, setIsFormVisible] = useState(false);

  const addExpenseHandler = (expense: Expense) =>
    setExpenses((prevExpenses) => [...prevExpenses, expense]);

  const togleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  const changeYearHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div className={styles.card}>
      {!isFormVisible ? (
        <div className={styles.button_container}>
          <button onClick={togleForm} className={styles.toggle_button}>
            Add expense
          </button>
        </div>
      ) : (
        <ExpenseForm onAddExpense={addExpenseHandler} onCancel={togleForm} />
      )}
      <Filter onYearChange={setSelectedYear} selectedYear={selectedYear} />
      <Hystogram expenses={filteredExpenses} />
      <Expenses expenses={filteredExpenses} />
    </div>
  );
};

export default Card;
