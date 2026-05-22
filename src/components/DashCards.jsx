import React from "react";

const varientStyles = {
    balance: {
        color: "text-amber-400",
        size: "text-5xl",
    },
    income: {
        color: "text-green-400",
        size: "text-3xl",
    },
    expense: {
        color: "text-red-400",
        size: "text-3xl",
    },
    saving: {
        color: "text-amber-400",
        size: "text-3xl",
    },
};

const DashCards = ({
    title = "",
    value = "",
    subtitle = "",
    varient = "balance",
}) => {
    const styles = varientStyles[varient];

    return (
        <div
            className={`${varient === "balance" ? "col-start-1 col-end-4" : ""} w-full border-2 border-(--primary-border-color) rounded-xl bg-(--secondery-bg-color) p-4`}
        >
            <div className="text-(--secondery-text-color)">{title}</div>
            <div className={`py-1 ${styles.color} ${styles.size}`}>
                <b>$ {value}</b>
            </div>
            <div className="text-(--secondery-text-color)">{subtitle}</div>
        </div>
    );
};

export default DashCards;
