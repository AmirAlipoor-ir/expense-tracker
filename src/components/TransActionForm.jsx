function TransActionForm({
  handleSubmit,
  description,
  setDescription,
  amount,
  setAmount,
  setType,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        className="border border-slate-600 w-full pl-2 py-1 rounded-md"
        id="description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="amount"
        className="border border-slate-600 w-full pl-2 py-1 rounded-md"
        id="amount"
      />
      <div className="radioBox">
        <input
          defaultChecked
          type="radio"
          name="type"
          value="expense"
          // checked={setType === "expense"}
          onChange={(e) => setType(e.target.value)}
          id="expense"
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          // checked={setType === "income"}
          onChange={(e) => setType(e.target.value)}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button type="submit" className="">
        Add transaction
      </button>
    </form>
  );
}

export default TransActionForm;
