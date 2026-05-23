import React from "react";
import { PiggyBank, Trash2 } from "lucide-react";

const Header = ({ clearData }) => {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-stretch gap-2">
                <div className="flex items-center rounded-2xl bg-amber-300 p-1">
                    <PiggyBank size={44} strokeWidth={1} />
                </div>
                <div className="flex flex-col justify-center">
                    <span className="text-xl lg:text-2xl">Ledger</span>
                    <span className="text-md text-gray-500 lg:text-lg">
                        Expense Tracker
                    </span>
                </div>
            </div>
            <div className="clear-btn">
                <button
                    onClick={() => {
                        clearData([]);
                    }}
                    className="lg:text-md flex items-center gap-1 rounded-xl border-2 border-(--primary-border-color) bg-(--secondery-bg-color) px-3 py-2 text-sm transition-colors hover:cursor-pointer hover:bg-[rgb(45,45,55)] lg:gap-2 lg:px-4 lg:py-3"
                >
                    <Trash2 size={16} strokeWidth={1} /> Clear All
                </button>
            </div>
        </div>
    );
};

export default Header;
