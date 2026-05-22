import React from "react";
import TransectionCards from "./TransectionCards";

const Transection = () => {
    console.log(
        "transction list and 'X' button will be dynamically render after handling local storage",
    );
    return (
        <div className="w-[60%]">
            <span className="text-(--secondery-text-color)">TRANSECTIONS</span>
            <TransectionCards
                isEmpty={false}
                description="shjvbd"
                catagory="Housing"
                date="2026-04-30"
                value={45}
            />
            <TransectionCards
                isEmpty={false}
                description="jhsvb"
                catagory="Freelance"
                date="2026-01-30"
                value={25}
            />
            <TransectionCards
                isEmpty={false}
                description="sjidvb"
                catagory="Education"
                date="2026-06-30"
                value={5}
            />
        </div>
    );
};

export default Transection;
