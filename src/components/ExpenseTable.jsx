import { useState } from "react";
import "../styles/ExpenseTable.css";

function ExpenseTable({ expenses, onDelete }) {
  const [sortBy, setSortBy] = useState("");

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (!sortBy) return 0;
    return a[sortBy].localeCompare(b[sortBy]);
  });

  return (
    <div>
      <div className="sort-controls">
        <label>Sort by: </label>
        <select onChange={(e) => setSortBy(e.target.value)} defaultValue="">
          <option value="">None</option>
          <option value="category">Category</option>
          <option value="description">Description</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedExpenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
              <td>
                <button onClick={() => onDelete(index)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpenseTable;