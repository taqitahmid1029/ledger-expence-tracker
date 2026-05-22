import React from "react";
import { PiggyBank, Trash2 } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-stretch gap-2">
        <div className="p-2 bg-amber-300 rounded-2xl">
          <PiggyBank size={44} strokeWidth={1} />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-2xl">Ledger</span>
          <span className="text-lg text-gray-500">Expense Tracker</span>
        </div>
      </div>
      <div className="clear-btn">
        <button className="flex gap-2 items-center text-md bg-(--secondery-bg-color) border-2 border-(--primary-border-color) px-4 py-2 rounded-2xl">
          <Trash2 size={16} strokeWidth={1} /> Clear All
        </button>
      </div>
    </div>
  );
};

export default Header;
