import React, { useState } from "react";
//Component in React is just a javascript function
//only 1 root element per 1 return statement (root element)
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
/**
 * React component containing properties from other components passed to and modified before returned
 * @param {property object} props Object passed from app containing required    properties
 * @returns returns component back to caller component containing modified property object
 */
function ExpenseItem(props) {
  /** moved date to new component */
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 284.67;
  // const month = props.date.toLocaleString('en-US', {month: 'long'});
  // const day = props.date.toLocaleString('en-US', { day: '2-digit'});
  // const year = props.date.getFullYear();
  //const [title, setTitle] = useState(props.title); //hook always returns array with exactly 2 elements. stored using array destructuring
  console.log("ExpenseItem state or states evaluated by React");

  // var clickHandler = function () {
  //   setTitle('Updated');
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* <h2>{title}</h2> */}
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem; //default function for THIS file
