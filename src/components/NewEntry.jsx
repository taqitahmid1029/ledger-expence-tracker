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
        <div className="lg:text-md flex w-full flex-col gap-4 rounded-lg border-2 border-(--primary-border-color) bg-(--secondery-bg-color) p-4 text-sm md:w-[40%]">
            <div className="text-md text-(--secondery-text-color) lg:text-lg">
                NEW ENTRY
            </div>
            <div className="">
                <button
                    onClick={() => {
                        setType("expense");
                    }}
                    className={`${type === "expense" ? "border-transparent bg-red-400 text-black" : "border-(--primary-border-color) text-(--primary-text-color)"} w-[50%] rounded-l-lg border-2 p-2 text-center hover:cursor-pointer`}
                >
                    EXPENSE
                </button>
                <button
                    onClick={() => {
                        setType("income");
                    }}
                    className={`${type === "income" ? "border-transparent bg-green-400 text-black" : "border-(--primary-border-color) text-(--primary-text-color)"} w-[50%] rounded-r-lg border-2 p-2 text-center hover:cursor-pointer`}
                >
                    INCOME
                </button>
            </div>
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
                    className="w-full rounded-lg border-2 border-(--primary-border-color) bg-(--primary-bg-color) px-2 py-1"
                />
            </div>
            <div>
                <div className="text-(--secondery-text-color)">&nbsp;DATE</div>
                <input
                    type="date"
                    name="date"
                    id="date"
                    value={date}
                    onChange={(event) => {
                        setDate(event.target.value);
                    }}
                    className="w-full rounded-lg border-2 border-(--primary-border-color) bg-(--primary-bg-color) px-2 py-1"
                />
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
                    className="w-full rounded-lg border-2 border-(--primary-border-color) bg-(--primary-bg-color) px-2 py-1"
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
                    className="w-full rounded-lg border-2 border-(--primary-border-color) bg-(--primary-bg-color) px-2 py-1"
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
            <div className="pb-4">
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
                                date: new Date(date).toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "long",
                                        day: "2-digit",
                                        year: "numeric",
                                    }
                                ),
                            };
                            historySetter([...history, newTrans]);
                            setAmount("");
                            setDescription("");
                            setCategory("Other");
                        }
                    }}
                    className="w-full rounded-lg border-2 border-(--primary-border-color) bg-blue-600 px-4 py-2 transition-colors hover:cursor-pointer hover:bg-blue-950"
                >
                    ADD ENTRY
                </button>
            </div>
        </div>
    );
};

export default NewEntry;
