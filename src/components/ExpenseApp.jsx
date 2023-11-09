import { useState } from "react";
import OverViewComponent from "./OverViewComponent";
import TransActionComponent from "./TransActionComponent";

function ExpenseApp() {
  const [note, setNote] = useState([]);

  const handleAddNote = (newNote) => {
    setNote((prev) => [...prev, newNote]);
  };

  return (
    <div className="bg-white w-[90%] mx-auto p-2 rounded-md border border-slate-600">
      <OverViewComponent onAddNote={handleAddNote}/>
      {/* <h2 className="pt-2">Add some tnx</h2> */}
      <TransActionComponent note={note}/>
    </div>
  );
}

export default ExpenseApp;
