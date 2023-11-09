import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

function OverViewComponent({ onAddNote }) {
  const [open, setOpen] = useState(false);

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
    onAddNote(expense);
    setAmount("");
    setDescription("");
    setOpen(false);
  };
  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2>Balance : 300</h2>
        {!open ? (
          <button
            onClick={() => setOpen(!open)}
            className="bg-violet-100 rounded-md border border-violet-700 text-violet-700 px-2 py-0 "
          >
            Add
          </button>
        ) : (
          <button
            onClick={() => setOpen(!open)}
            className="bg-red-50-100 rounded-md border border-red-700 text-red-700 px-2 py-0 "
          >
            Cancel
          </button>
        )}
      </div>
      {open && (
        <TransActionForm
          setType={setType}
          amount={amount}
          setAmount={setAmount}
          setDescription={setDescription}
          description={description}
          handleSubmit={handleSubmit}
          onAddNote={onAddNote}
        />
      )}

      <div className="flex justify-between mb-3">
        <div className="w-[48%] border border-slate-600 rounded-md px-2 py-1">
          Expense
          <span className="block text-red-600 font-bold">0 $</span>
        </div>
        <div className="w-[48%] border border-slate-600 rounded-md px-2 py-1">
          income<span className="block text-green-600 font-bold">0 $</span>
        </div>
      </div>
    </>
  );
}

export default OverViewComponent;
