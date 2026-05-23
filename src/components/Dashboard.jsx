import React, { useState } from "react";
import DashCards from "./DashCards";
import Breakpoint from "./Breakpoint";

const Dashboard = ({
    transData = [],
    incomeData = [],
    incomeValue = 0,
    expenseData = [],
    expenseValue = 0,
    rateValue = 0,
}) => {
    const isMD = Breakpoint("(min-width: 768px)");
    return (
        <div className="my-4 grid grid-cols-1 grid-rows-3 gap-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3">
            <DashCards
                title="NET BALANCE"
                value={incomeValue - expenseValue}
                subtitle={
                    transData.length === 0
                        ? "No transaction yet"
                        : transData.length === 1
                          ? `${transData.length} Transaction`
                          : `${transData.length} Transactions`
                }
                varient="BALANCE"
            />
            <DashCards
                title="TOTAL INCOME"
                value={incomeValue}
                subtitle={
                    incomeData.length === 0 || incomeData.length === 1
                        ? `${incomeData.length} Transaction`
                        : `${incomeData.length} Transactions`
                }
                varient="INCOME"
            />
            <DashCards
                title="TOTAL EXPENSES"
                value={expenseValue}
                subtitle={
                    expenseData.length === 0 || expenseData.length === 1
                        ? `${expenseData.length} Transaction`
                        : `${expenseData.length} Transactions`
                }
                varient="EXPENSE"
            />
            {isMD ? (
                <DashCards
                    title="SAVINGS RATE"
                    value={rateValue}
                    subtitle={
                        transData.length === 0
                            ? "add income to calculate"
                            : "of income saved"
                    }
                    varient="SAVINGS"
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default Dashboard;
