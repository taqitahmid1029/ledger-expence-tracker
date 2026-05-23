import React from "react";

const VARIENT_STYLES = {
    BALANCE: {
        color: "text-amber-400",
        size: "text-5xl",
    },
    INCOME: {
        color: "text-green-400",
        size: "text-3xl",
    },
    EXPENSE: {
        color: "text-red-400",
        size: "text-3xl",
    },
    SAVINGS: {
        color: "text-amber-400",
        size: "text-3xl",
    },
};

const DashCards = ({
    title = "",
    value = 0,
    subtitle = "",
    varient = "BALANCE",
}) => {
    const styles = VARIENT_STYLES[varient];

    return (
        <div
            className={`${varient === "BALANCE" ? "sm:col-start-1 sm:col-end-3 md:col-end-4" : ""} w-full rounded-xl border-2 border-(--primary-border-color) bg-(--secondery-bg-color) p-4`}
        >
            <div className="text-md text-(--secondery-text-color) lg:text-lg">
                {title}
            </div>
            <div className={`py-1 ${styles.color} ${styles.size}`}>
                {varient !== "SAVINGS" ? <b>&#2547; </b> : ""}
                <b>{value.toLocaleString("en-IN")}</b>
                {varient === "SAVINGS" ? <b> %</b> : ""}
            </div>
            <div className="lg:text-md text-sm text-(--secondery-text-color)">
                {subtitle}
            </div>
        </div>
    );
};

export default DashCards;
