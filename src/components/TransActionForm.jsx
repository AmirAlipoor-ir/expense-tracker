function TransActionForm({
  handleSubmit,
  description,
  setDescription,
  amount,
  setAmount,
  setType,
}) {
  return (
    <form onSubmit={handleSubmit} className="">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        className="border border-slate-600 w-full pl-2 py-1 rounded-md mb-1 outline-none"
        id="description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="amount"
        className="border border-slate-600 w-full pl-2 py-1 rounded-md mb-2 outline-none"
        id="amount"
      />
      <div className="flex items-center justify-center mb-3">
        <input
          defaultChecked
          type="radio"
          name="type"
          value="expense"
          className=""
          onChange={(e) => setType(e.target.value)}
          id="expense"
        />
        <label htmlFor="expense" className="mr-6">Expense</label>
        <input
          type="radio"
          name="type"
          value="income"
          className=""
          onChange={(e) => setType(e.target.value)}
          id="income"
        />
        <label htmlFor="income">Income</label>
      </div>
      <button
        type="submit"
        className="bg-violet-700 rounded-md w-full py-1 mb-4 text-white"
      >
        Add transaction
      </button>
    </form>
  );
}

export default TransActionForm;








// cursor: text;
// font-size: 14px;
// line-height: 20px;
// letter-spacing: 0px;
