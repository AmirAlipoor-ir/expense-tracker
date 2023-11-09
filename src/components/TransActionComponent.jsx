import React from "react";

function TransActionComponent({ note }) {
  return (
    <div>
      {note.map((i,index) => (
        <section key={index}>
          <div
            className={`flex justify-between bg-gray-100 py-1 px-1 rounded-md border-r-4 ${
              i.type === "income" ? " border-green-600" : "border-red-600"
            }`}
          >
            <span>{i.description}</span>
            <span>$ {i.amount}</span>
          </div>
        </section>
      ))}
    </div>
  );
}

export default TransActionComponent;
