import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // });

  const titleChangeHandler = function (event) {
    console.log(event);
    // setUserInput(function(prevState) {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = function (event) {
    console.log(event);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // })
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = function (event) {
    console.log(event);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
    setEnteredDate(event.target.value);
  };

  const submitHandler = function (event) {
    event.preventDefault();
    var expenseData = {
      title: enteredTitle, //state variables
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle} //two way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
