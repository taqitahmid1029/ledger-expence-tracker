import React, { useState } from "react";

const EXPENSE_CATS = [
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

const INCOME_CATS = [
    "Salary",
    "Freelance",
    "Investment",
    "Gift",
    "Bonus",
    "Other",
];

const NewEntry = ({ history = [], historySetter }) => {
    const generateID = () =>
        Math.random().toString(36).slice(2) + Date.now().toString(36);

    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("Other");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [description, setDescription] = useState("");
    const [type, setType] = useState("expense");

    return (
        <div className="bg-(--secondery-bg-color) flex flex-col gap-4 border-2 border-(--primary-border-color) rounded-lg w-[40%] p-4">
            <div className="text-(--secondery-text-color)">NEW ENTRY</div>
            <div className="">
                <button
                    onClick={() => {
                        setType("expense");
                    }}
                    className={`${type === "expense" ? "bg-red-400 text-black border-transparent" : "text-(--primary-text-color) border-(--primary-border-color)"} border-2 w-[50%] text-center p-2 rounded-l-lg hover:cursor-pointer`}
                >
                    EXPENSE
                </button>
                <button
                    onClick={() => {
                        setType("income");
                    }}
                    className={`${type === "income" ? "bg-green-400 text-black border-transparent" : "text-(--primary-text-color) border-(--primary-border-color)"} border-2 w-[50%] text-center p-2 rounded-r-lg hover:cursor-pointer`}
                >
                    INCOME
                </button>
            </div>
            <div className="flex flex-row gap-2">
                <div>
                    <div className="text-(--secondery-text-color)">
                        &nbsp;AMOUNT
                    </div>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        value={amount}
                        placeholder="0.00"
                        onChange={(event) => {
                            setAmount(event.target.value);
                        }}
                        className="w-full bg-(--primary-bg-color) px-2 py-1 border-2 border-(--primary-border-color) rounded-lg"
                    />
                </div>
                <div>
                    <div className="text-(--secondery-text-color)">
                        &nbsp;DATE
                    </div>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        value={date}
                        onChange={(event) => {
                            setDate(event.target.value);
                        }}
                        className="w-full bg-(--primary-bg-color) px-2 py-1 border-2 border-(--primary-border-color) rounded-lg"
                    />
                </div>
            </div>
            <div>
                <div className="text-(--secondery-text-color)">DESCRIPTION</div>
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="What was this for?"
                    value={description}
                    onChange={(event) => {
                        setDescription(event.target.value);
                    }}
                    className="bg-(--primary-bg-color) px-2 py-1 border-(--primary-border-color) border-2 w-full rounded-lg"
                />
            </div>
            <div>
                <div className="text-(--secondery-text-color)">CATEGORY</div>
                <select
                    name="category"
                    id="category"
                    value={category}
                    onChange={(event) => {
                        setCategory(event.target.value);
                    }}
                    className="bg-(--primary-bg-color) px-2 py-1 border-(--primary-border-color) border-2 w-full rounded-lg"
                >
                    {type === "expense"
                        ? EXPENSE_CATS.map((e) => (
                              <option key={e} value={e}>
                                  {e}
                              </option>
                          ))
                        : INCOME_CATS.map((i) => (
                              <option key={i} value={i}>
                                  {i}
                              </option>
                          ))}
                </select>
            </div>
            <div>
                <button
                    onClick={() => {
                        if (amount === "") {
                            alert("Amount is required");
                        } else if (description === "") {
                            alert("Description is required");
                        } else {
                            let newTrans = {
                                id: generateID(),
                                type: type,
                                amount: parseFloat(amount),
                                description: description,
                                category: category,
                                date: date,
                            };
                            historySetter([...history, newTrans]);
                            setAmount("");
                            setDescription("");
                            setCategory("Other");
                        }
                    }}
                    className="py-2 px-4 rounded-lg w-full border-(--primary-border-color) border-2 bg-blue-600 transition-colors hover:bg-blue-950 hover:cursor-pointer"
                >
                    ADD ENTRY
                </button>
            </div>
        </div>
    );
};

export default NewEntry;
