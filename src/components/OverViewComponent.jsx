import React, { useState } from "react";
import TransActionForm from "./TransActionForm";

function OverViewComponent({
  expenseAmount,
  incomeAmount,
  handleSubmit,
  description,
  setDescription,
  amount,
  setAmount,
  setType,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center mb-2">
        <h2>Balance : {incomeAmount - expenseAmount}</h2>
        {!open ? (
          <button
            onClick={() => setOpen(!open)}
            className="bg-violet-100 rounded-md border border-violet-700 text-violet-700 px-5 py-0 "
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
        />
      )}

      <div className="flex justify-between mb-3">
        <div className="w-[48%] sm:w-[49%] border border-slate-600 rounded-md px-2 py-1">
          Expense
          <span className="block text-red-600 font-bold">{expenseAmount} $</span>
        </div>
        <div className="w-[48%] sm:w-[49%] border border-slate-600 rounded-md px-2 py-1">
          income<span className="block text-green-600 font-bold">{incomeAmount} $</span>
        </div>
      </div>
    </>
  );
}

export default OverViewComponent;
