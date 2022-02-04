//Desired end state
//custom react elements must start uppercase

//import ExpenseItem from "./components/ExpenseItem";
import React, {useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import ExpenseForm from "./components/NewExpense/ExpenseForm";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
];

function App() {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = function(expense) {
    //populate prev expenses add new expense
    setExpenses(function(prevExpenses) {
      return [expense, ...prevExpenses]; //spread operator
    });
    console.log('In App.js');
    console.log(expense);
  }
/**harder to read if the React library was not imported */  
// return React.createElement(
//   'div', 
//   {}, 
//   React.createElement('h2', {}, "Let\'s get started!"),
//   React.createElement(Expenses, {items: expenses})
// );

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
