import React from "react";
import TransCards from "./TransCards";

const Transaction = ({ history = [], historySetter }) => {
    return (
        <div className="w-[60%]">
            <span className="text-(--secondery-text-color)">TRANSECTIONS</span>
            {history.length ? (
                history.map((element) => (
                    <TransCards
                        key={element.id}
                        history={history}
                        historySetter={historySetter}
                        isEmpty={false}
                        id={element.id}
                        description={element.description}
                        category={element.category}
                        date={element.date}
                        value={element.amount}
                        type={element.type}
                    />
                ))
            ) : (
                <TransCards isEmpty={true} />
            )}
        </div>
    );
};

export default Transaction;
