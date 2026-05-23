import React from "react";
import DashCards from "./DashCards";
import Breakpoint from "./Breakpoint";

const Dashboard = ({
    transData = [],
    incomeData = 0,
    expenseData = 0,
    rateData = 0,
}) => {
    const isMD = Breakpoint("(min-width: 768px)");
    return (
        <div className="my-4 grid grid-cols-1 grid-rows-3 gap-2 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3">
            <DashCards
                title="NET BALANCE"
                value={incomeData - expenseData}
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
                value={incomeData}
                subtitle={
                    transData.length === 0 || transData.length === 1
                        ? `${transData.length} Transaction`
                        : `${transData.length} Transactions`
                }
                varient="INCOME"
            />
            <DashCards
                title="TOTAL EXPENSES"
                value={expenseData}
                subtitle={
                    transData.length === 0 || transData.length === 1
                        ? `${transData.length} Transaction`
                        : `${transData.length} Transactions`
                }
                varient="EXPENSE"
            />
            {isMD ? (
                <DashCards
                    title="SAVINGS RATE"
                    value={rateData}
                    subtitle={
                        transData.length === 0
                            ? "add income to calculate"
                            : transData.length === 1
                              ? `${transData.length} Transaction`
                              : `${transData.length} Transactions`
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
