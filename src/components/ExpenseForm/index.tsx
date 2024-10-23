import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import styles from "./ExpenseForm.module.css";
import { Expense } from "../Expenses";

interface ExpenseFormProps {
  onAddExpense: (expense: Expense) => void;
  onCancel: () => void;
}

const ExpenseForm = ({ onAddExpense, onCancel }: ExpenseFormProps) => {
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
      <div className={styles.expense_form__control}>
        <label>Title</label>
        <input
          placeholder="Title"
          type="text"
          {...register("title", { required: true })}
        />
      </div>

      <div className={styles.expense_form__control}>
        <label>Amount</label>
        <input
          placeholder="Amount"
          type="number"
          {...register("amount", { required: true, min: 1 })}
        />
      </div>

      <div className={styles.expense_form__control}>
        <label>Date</label>
        <DatePicker selected={startDate} onChange={(date) => setDate(date!)} />
      </div>

      <div className={styles.expense_form__actions}>
        <button className={styles.expense_form__submit} onClick={onCancel}>
          Cancel
        </button>
        <input
          type="submit"
          value="Add Expense"
          className={styles.expense_form__submit}
        />
      </div>
    </form>
  );
};

export default ExpenseForm;
