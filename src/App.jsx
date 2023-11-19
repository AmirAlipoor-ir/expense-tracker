import { useState } from "react";
import ExpenseApp from "./components/ExpenseApp";

function App() {
  return (
    <div className="bg-gray-100 h-screen px-auto pt-3 font-sans font-normal text-lg">
      <h1 className="mx-auto w-fit font-semibold pb-1 text-2xl sm:text-4xl sm:pb-3">Expense tracker</h1>
      <ExpenseApp/>
    </div>
  );
}

export default App;
