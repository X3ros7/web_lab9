import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import styles from "./Expenses.module.css";
import Filter from "../Filter";

export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

interface ExpensesProps {
  expenses: Expense[];
}

const Expenses = ({ expenses }: ExpensesProps) => {
  const [year, setYear] = useState("2021");

  const filteredExpenses = expenses.filter((expense) => {
    const expenseYear = expense.date.getFullYear().toString();

    return expenseYear === year;
  });

  return (
    <div className={styles.expenses}>
      <Filter onYearChange={setYear} selectedYear={year} />
      {filteredExpenses.map((expense) => (
        <div className="expense_item" key={expense.id}>
          <ExpenseItem expense={expense} />
        </div>
      ))}
    </div>
  );
};

export default Expenses;
