import React from "react";
import DashCards from "./DashCards";

const Dashboard = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 my-4">
            <DashCards
                title="Net Balance"
                value={0}
                subtitle="No transactions yet"
                varient="balance"
            />
            <DashCards
                title="Total Income"
                value={0}
                subtitle={`${0} Transactions`}
                varient="income"
            />
            <DashCards
                title="Total Expenses"
                value={0}
                subtitle={`${0} Transactions`}
                varient="expense"
            />
            <DashCards
                title="Savings Rate"
                value={0}
                subtitle="add income to calculate"
                varient="saving"
            />
        </div>
    );
};

export default Dashboard;
