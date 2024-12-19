import React from "react";

const BadgeDiscover = ({ badgeName }) => {
    return (
        <div className="bg-transparent border border-white rounded-full">
            <p className="text-white py-3 px-7 font-medium text-[14px]">{badgeName}</p>
        </div>
    );
};

export default BadgeDiscover;