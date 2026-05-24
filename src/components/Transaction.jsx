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
            <div className="text-md flex items-center justify-between text-(--secondery-text-color) lg:text-lg">
                <span>TRANSECTIONS</span>
                <span className="lg:text-md flex items-center gap-2 rounded-2xl border-2 bg-(--secondery-bg-color) px-2 py-1 text-sm">
                    <span>Filter: </span>
                    <select
                        name="filter"
                        id="filter"
                        value={filter}
                        onChange={(event) => setFilter(event.target.value)}
                        className="bg-(--secondery-bg-color)"
                    >
                        <option value="all">All</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
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
