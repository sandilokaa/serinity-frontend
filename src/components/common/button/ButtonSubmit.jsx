import React from "react";

const ButtonSubmit = ({ buttonName, fontSize, fontWeight, width, borderRadius }) => {
    return (
        <button style={{fontSize: fontSize, fontWeight: fontWeight, width: width, borderRadius: borderRadius}} className="bg-black border border-black text-white py-2 px-6 hover:border hover:border-black hover:text-black hover:bg-white transition-all">
            {buttonName}
        </button>
    );
};

export default ButtonSubmit;