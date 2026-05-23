import React from "react";
import DashCards from "./DashCards";

const Dashboard = ({
    transData = [],
    incomeData = 0,
    expenseData = 0,
    rateData = 0,
}) => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 my-4">
            <DashCards
                title="NET BALANCE"
                value={incomeData - expenseData}
                subtitle={
                    transData.length
                        ? `${transData.length} Transctions`
                        : "No transaction yet"
                }
                varient="BALANCE"
            />
            <DashCards
                title="TOTAL INCOME"
                value={incomeData}
                subtitle={`${transData.length} Transactions`}
                varient="INCOME"
            />
            <DashCards
                title="TOTAL EXPENSES"
                value={expenseData}
                subtitle={`${transData.length} Transactions`}
                varient="EXPENSE"
            />
            <DashCards
                title="SAVINGS RATE"
                value={rateData}
                subtitle={
                    transData.length
                        ? `${transData.length} Transactions`
                        : "add income to calculate"
                }
                varient="SAVINGS"
            />
        </div>
    );
};

export default Dashboard;
