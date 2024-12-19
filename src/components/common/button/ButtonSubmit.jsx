import React from "react";

const ButtonSubmit = ({ buttonName }) => {
    return (
        <button className="bg-black border border-black text-white rounded-full py-2 px-6 font-medium text-[12px] hover:border hover:border-black hover:text-black hover:bg-white transition-all w-[150px]">
            {buttonName}
        </button>
    );
};

export default ButtonSubmit;