import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import NewEntry from "./components/NewEntry";
import Transaction from "./components/Transaction";

const App = () => {
    const KEY = "ledger-v1";
    const [trans, setTrans] = useState(
        () => JSON.parse(localStorage.getItem(KEY)) || []
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(trans));

        let totalIncome = 0;
        let totalExpense = 0;
        trans.forEach((element) => {
            if (element["type"] === "income") totalIncome += element["amount"];
            if (element["type"] === "expense")
                totalExpense += element["amount"];
        });

        setIncome(totalIncome);
        setExpense(totalExpense);
        setRate(totalIncome > 0 ? 100 - (totalExpense / totalIncome) * 100 : 0);
    }, [trans]);

    return (
        <main className="m-auto max-w-216 px-8 py-6 text-(--primary-text-color)">
            <Header clearData={setTrans} />
            <Dashboard
                transData={trans}
                incomeData={income}
                expenseData={expense}
                rateData={rate}
            />
            <div className="flex flex-col gap-4 md:flex-row">
                <NewEntry history={trans} historySetter={setTrans} />{" "}
                <Transaction history={trans} historySetter={setTrans} />{" "}
            </div>
        </main>
    );
};

export default App;
