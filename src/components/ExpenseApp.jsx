import { useEffect, useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

function ExpenseApp() {
  const [note, setNote] = useState([]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description) return null;
    const expense = {
      amount,
      description,
      type,
    };
    handleAddNote(expense);
    setAmount("");
    setDescription("");
    // setOpen(false);
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    note.forEach((t) => {
      t.type === "expense"
        ? (exp = exp + parseFloat(t.amount))
        : (inc = inc + parseFloat(t.amount));
    });
    setExpense(exp);
    setIncome(inc);
  }, [note]);

  const handleAddNote = (newNote) => {
    setNote((prev) => [...prev, newNote]);
  };

  return (
    <div className="bg-white w-[90%] mx-auto p-2 rounded-md border border-slate-600 text-base">
      <OverViewComponent
        onAddNote={handleAddNote}
        expenseAmount={expense}
        incomeAmount={income}
        setType={setType}
        amount={amount}
        setAmount={setAmount}
        setDescription={setDescription}
        description={description}
        handleSubmit={handleSubmit}
      />
      {/* <h2 className="pt-2">Add some tnx</h2> */}
      <TransActionComponent note={note} />
    </div>
  );
}

export default ExpenseApp;
