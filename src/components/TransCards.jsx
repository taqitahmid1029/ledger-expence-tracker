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
import Breakpoint from "./Breakpoint";

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
    let isSM = Breakpoint("(max-width: 40rem)");

    if (isEmpty) {
        return (
            <>
                <div className="flex h-52 w-full flex-col items-center justify-center text-center">
                    <div>No transactions yet.</div>
                    <div>Add your first entry above!</div>
                </div>
            </>
        );
    }

    return (
        <div className="my-4 flex flex-row items-center justify-between rounded-lg border-2 border-(--primary-border-color) bg-(--secondery-bg-color) px-3 py-2 transition-colors hover:bg-[rgb(45,45,55)] sm:p-4">
            <div className="flex items-center gap-2">
                <div>{CATS_EMOJIES[category]}</div>
                <div>
                    <div className="text-md">{description}</div>
                    <div className="text-sm text-(--secondery-text-color)">
                        <span>{category}</span>
                        {isSM ? <br /> : <>&nbsp;-&nbsp;</>}
                        <span>{date}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center gap-3 text-xl">
                {type === "expense" ? (
                    <span className="text-red-400">-{value}&#2547;</span>
                ) : (
                    <span className="text-green-400">+{value}&#2547;</span>
                )}
                <button
                    onClick={() => {
                        historySetter((prev) =>
                            prev.filter((element) => element.id !== id)
                        );
                    }}
                    className="rounded-md transition-colors hover:bg-red-400 hover:text-black sm:p-1"
                >
                    <X strokeWidth={1} />
                </button>
            </div>
        </div>
    );
};

export default TransCards;
