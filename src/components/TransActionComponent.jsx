import React, { useState } from "react";

function TransActionComponent({ note }) {
  const [searchInput, setSearchInput] = useState("");
  // const [filterNote, setFilterNote] = useState("");

  const changeHandler = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };


   const filterNote= note.filter((i) => {
    return i.description.match(searchInput);
});


  return (
    <div className="">
      <input
        type="text"
        value={searchInput}
        onChange={changeHandler}
        placeholder="search for tnx..."
        className=""
      />
      {filterNote.map((i, index) => (
        <section key={index} className="mb-2">
          <div
            className={`flex justify-between bg-gray-100 py-2 px-1 sm:px-2 rounded-md  border-r-4 ${
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
