import React from "react";
import {
    CupSoda,
    Bus,
    BaggageClaim,
    House,
    Pill,
    Clapperboard,
    BookOpenText,
    TabletSmartphone,
    Pin,
    BriefcaseBusiness,
    Laptop,
    ChartColumnIncreasing,
    Gift,
    Star,
    X,
} from "lucide-react";

const CATS_EMOJIES = {
    "Food & Drink": <CupSoda strokeWidth={1} />,
    Transport: <Bus strokeWidth={1} />,
    Shopping: <BaggageClaim strokeWidth={1} />,
    Housing: <House strokeWidth={1} />,
    Health: <Pill strokeWidth={1} />,
    Entertainment: <Clapperboard strokeWidth={1} />,
    Education: <BookOpenText strokeWidth={1} />,
    Subscriptions: <TabletSmartphone strokeWidth={1} />,
    Other: <Pin strokeWidth={1} />,
    Salary: <BriefcaseBusiness strokeWidth={1} />,
    Freelance: <Laptop strokeWidth={1} />,
    Investment: <ChartColumnIncreasing strokeWidth={1} />,
    Gift: <Gift strokeWidth={1} />,
    Bonus: <Star strokeWidth={1} />,
};

const TransCards = ({
    history = [],
    historySetter,
    isEmpty = true,
    id,
    description = "",
    category = "",
    date = "",
    value = 0,
    type = "expense",
}) => {
    if (isEmpty) {
        return (
            <>
                <div className="w-full flex flex-col items-center justify-center h-52">
                    <div>No transactions yet.</div>
                    <div>Add your first entry above!</div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-row justify-between items-center rounded-lg border-2 border-(--primary-border-color) bg-(--secondery-bg-color) p-4 my-4">
            <div className="flex gap-2 items-center">
                <div>{CATS_EMOJIES[category]}</div>
                <div>
                    <div className="text-md">{description}</div>
                    <div className="text-sm text-(--secondery-text-color)">
                        <span>{category}</span>
                        &nbsp;-&nbsp;
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3 text-xl">
                {type === "expense" ? (
                    <span className="text-red-400">- {value} &#2547;</span>
                ) : (
                    <span className="text-green-400">+ {value} &#2547;</span>
                )}
                <button
                    onClick={() => {
                        historySetter((prev) =>
                            prev.filter((element) => element.id !== id),
                        );
                    }}
                >
                    <X strokeWidth={1} />
                </button>
            </div>
        </div>
    );
};

export default TransCards;
