import React, { useState } from "react";
import Expenses, { Expense } from "../Expenses";
import styles from "./Card.module.css";
import ExpenseForm from "../ExpenseForm";
import Hystogram from "../Hystogram";

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

  const monthlyExpenses = Array(12).fill(0);
  expenses.forEach((expense) => {
    const month = expense.date.getMonth();
    ++monthlyExpenses[month];
  });

  const chartDataPoints = [
    {
      label: "Jan",
      value: monthlyExpenses[0],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Feb",
      value: monthlyExpenses[1],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Mar",
      value: monthlyExpenses[2],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Apr",
      value: monthlyExpenses[3],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "May",
      value: monthlyExpenses[4],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Jun",
      value: monthlyExpenses[5],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Jul",
      value: monthlyExpenses[6],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Aug",
      value: monthlyExpenses[7],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Sep",
      value: monthlyExpenses[8],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Oct",
      value: monthlyExpenses[9],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Nov",
      value: monthlyExpenses[10],
      maxValue: Math.max(...monthlyExpenses),
    },
    {
      label: "Dec",
      value: monthlyExpenses[11],
      maxValue: Math.max(...monthlyExpenses),
    },
  ];

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
      <Hystogram dataPoints={chartDataPoints} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default Card;
