import React from "react";
import ExpenseItem from "../ExpenseItem";

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
  return (
    <div className="">
      {expenses.map((expense) => (
        <div className="expense_item" key={expense.id}>
          <ExpenseItem expense={expense} />
        </div>
      ))}
    </div>
  );
};

export default Expenses;
