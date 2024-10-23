import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import styles from "./ExpenseForm.module.css";
import { Expense } from "../Expenses";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
}

const ExpenseForm = ({ onAddExpense }: ExpenseFormProps) => {
  const { register, handleSubmit } = useForm();
  const [startDate, setDate] = useState(new Date());

  const onSubmit = (data: any) => {
    const expense: Expense = {
      id: Math.random().toString(),
      title: data.title,
      amount: parseFloat(data.amount),
      date: startDate,
    };
    onAddExpense(expense);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.expense_form}>
      <input
        placeholder="Title"
        type="text"
        {...register("title", { required: true })}
      />
      <input
        placeholder="Amount"
        type="number"
        {...register("amount", { required: true, min: 1 })}
      />
      <DatePicker selected={startDate} onChange={(date) => setDate(date!)} />
      <input type="submit" value="Add Expense" />
    </form>
  );
};

export default ExpenseForm;
