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
    const [incomeTrans, setIncomeTrans] = useState(() =>
        trans.filter((t) => t.type === "income")
    );
    const [expenseTrans, setExpenseTrans] = useState(() =>
        trans.filter((t) => t.type === "expense")
    );
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [rate, setRate] = useState(0);

    useEffect(() => {
        localStorage.setItem(KEY, JSON.stringify(trans));

        let totalIncome = 0;
        let totalExpense = 0;
        let incomeArr = [];
        let expenseArr = [];
        trans.forEach((element) => {
            if (element["type"] === "income") {
                incomeArr.push(element);
                totalIncome += element["amount"];
            }
            if (element["type"] === "expense") {
                expenseArr.push(element);
                totalExpense += element["amount"];
            }
        });

        setIncome(totalIncome);
        setExpense(totalExpense);
        setRate(totalIncome > 0 ? 100 - (totalExpense / totalIncome) * 100 : 0);
        setIncomeTrans(incomeArr);
        setExpenseTrans(expenseArr);
    }, [trans]);

    return (
        <main className="m-auto max-w-216 px-8 py-6 text-(--primary-text-color)">
            <Header transData={trans} transDataSetter={setTrans} />
            <Dashboard
                transData={trans}
                incomeData={incomeTrans}
                incomeValue={income}
                expenseData={expenseTrans}
                expenseValue={expense}
                rateValue={rate}
            />
            <div className="flex flex-col gap-4 md:flex-row">
                <NewEntry history={trans} historySetter={setTrans} />{" "}
                <Transaction
                    transData={trans}
                    transDataSetter={setTrans}
                    incomeData={incomeTrans}
                    incomeDataSetter={setIncomeTrans}
                    expenseData={expenseTrans}
                    expenseDataSetter={setExpenseTrans}
                />
            </div>
        </main>
    );
};

export default App;
