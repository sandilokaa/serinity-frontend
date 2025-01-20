import React from "react";

const ButtonAuth = ({ buttonName, onClick }) => {
    return (
        <button onClick={onClick} className="bg-black border border-black text-white rounded-full py-2 px-6 font-medium text-base hover:border hover:border-black hover:text-black hover:bg-white transition-all">
            {buttonName}
        </button>
    );
};

export default ButtonAuth;