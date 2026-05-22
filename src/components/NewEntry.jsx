import React, { useState } from "react";

const expenseCatagories = [
    "Food & Drink",
    "Transport",
    "Shopping",
    "Housing",
    "Health",
    "Entertainment",
    "Education",
    "Subscriptions",
    "Other",
];

const incomeCatagories = [
    "Salary",
    "Freelance",
    "Investment",
    "Gift",
    "Bonus",
    "Other",
];

const NewEntry = () => {
    const [type, setType] = useState("expense");
    const [amount, setAmount] = useState();
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [description, setDescription] = useState("");
    return (
        <div className="bg-(--secondery-bg-color) flex flex-col gap-4 border-2 border-(--primary-border-color) rounded-lg w-[40%] p-4">
            <div className="text-(--secondery-text-color)">New Entry</div>
            <div className="">
                <button
                    onClick={() => {
                        setType("expense");
                    }}
                    className={`${type === "expense" ? "bg-red-400 text-red-800 border-transparent" : "text-(--primary-text-color) border-(--primary-border-color)"} border-2 w-[50%] text-center p-2 rounded-l-lg`}
                >
                    Expense
                </button>
                <button
                    onClick={() => {
                        setType("income");
                    }}
                    className={`${type === "income" ? "bg-green-400 text-green-800 border-transparent" : "text-(--primary-text-color) border-(--primary-border-color)"} border-2 w-[50%] text-center p-2 rounded-r-lg`}
                >
                    Income
                </button>
            </div>
            <div className="flex flex-row gap-2">
                <div>
                    <div className="text-(--secondery-text-color)">
                        &nbsp;Amount
                    </div>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        placeholder="Amount"
                        onChange={() => {
                            setAmount(event.target.value);
                        }}
                        className="w-full bg-(--primary-bg-color) px-2 py-1 border-2 border-(--primary-border-color) rounded-lg"
                    />
                </div>
                <div>
                    <div className="text-(--secondery-text-color)">
                        &nbsp;Date
                    </div>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={() => {
                            setDate(event.target.value);
                        }}
                        className="w-full bg-(--primary-bg-color) px-2 py-1 border-2 border-(--primary-border-color) rounded-lg"
                    />
                </div>
            </div>
            <div>
                <div className="text-(--secondery-text-color)">Description</div>
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="What was this for?"
                    value={description}
                    onChange={() => {
                        setDescription(event.target.value);
                    }}
                    className="bg-(--primary-bg-color) px-2 py-1 border-(--primary-border-color) border-2 w-full rounded-lg"
                />
            </div>
            <div>
                <div className="text-(--secondery-text-color)">Catagory</div>
                <select
                    name="catagory"
                    id="catagory"
                    className="bg-(--primary-bg-color) px-2 py-1 border-(--primary-border-color) border-2 w-full rounded-lg"
                >
                    {type === "expense"
                        ? expenseCatagories.map((e) => (
                              <option key={e} value={e}>
                                  {e}
                              </option>
                          ))
                        : incomeCatagories.map((i) => (
                              <option key={i} value={i}>
                                  {i}
                              </option>
                          ))}
                </select>
            </div>
            <div>
                <button className="py-2 px-4 rounded-lg w-full border-(--primary-border-color) border-2 bg-blue-600">
                    Add Entry
                </button>
            </div>
        </div>
    );
};

export default NewEntry;
