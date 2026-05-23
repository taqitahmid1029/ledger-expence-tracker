import React, { useState } from "react";
import TransCards from "./TransCards";

const Transaction = ({
    transData = [],
    transDataSetter,
    incomeData = [],
    incomeDataSetter,
    expenseData = [],
    expenseDataSetter,
}) => {
    const [filter, setFilter] = useState("all");
    return (
        <div className="w-full md:w-[60%]">
            <div className="text-md flex justify-between text-(--secondery-text-color) lg:text-lg">
                <span>TRANSECTIONS</span>
                <span className="lg:text-md flex gap-2 text-sm">
                    <button
                        onClick={() => {
                            setFilter("all");
                        }}
                        className={`rounded-2xl border-2 px-2 py-1 transition-colors ${filter === "all" ? "border-amber-800 text-amber-700" : "border-(--primary-border-color) text-(--secondery-text-color)"}`}
                    >
                        All
                    </button>
                    <button
                        onClick={() => {
                            setFilter("income");
                        }}
                        className={`rounded-2xl border-2 px-2 py-1 transition-colors ${filter === "income" ? "border-amber-800 text-amber-700" : "border-(--primary-border-color) text-(--secondery-text-color)"}`}
                    >
                        Income
                    </button>
                    <button
                        onClick={() => {
                            setFilter("expense");
                        }}
                        className={`rounded-2xl border-2 px-2 py-1 transition-colors ${filter === "expense" ? "border-amber-800 text-amber-700" : "border-(--primary-border-color) text-(--secondery-text-color)"}`}
                    >
                        Expense
                    </button>
                </span>
            </div>
            {!transData.length ? (
                <TransCards isEmpty={true} />
            ) : filter === "all" ? (
                transData.map((element) => (
                    <TransCards
                        key={element.id}
                        isEmpty={false}
                        history={transData}
                        historySetter={transDataSetter}
                        id={element.id}
                        description={element.description}
                        category={element.category}
                        date={element.date}
                        value={element.amount}
                        type={element.type}
                    />
                ))
            ) : filter === "income" ? (
                incomeData.map((element) => (
                    <TransCards
                        key={element.id}
                        isEmpty={false}
                        history={transData}
                        historySetter={transDataSetter}
                        id={element.id}
                        description={element.description}
                        category={element.category}
                        date={element.date}
                        value={element.amount}
                        type={element.type}
                    />
                ))
            ) : (
                expenseData.map((element) => (
                    <TransCards
                        key={element.id}
                        isEmpty={false}
                        history={transData}
                        historySetter={transDataSetter}
                        id={element.id}
                        description={element.description}
                        category={element.category}
                        date={element.date}
                        value={element.amount}
                        type={element.type}
                    />
                ))
            )}
        </div>
    );
};

export default Transaction;
