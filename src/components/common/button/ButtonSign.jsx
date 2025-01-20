import React from "react";

const ButtonSign = ({ onClick, buttonName, bgColor, textColor, icon, borderColor }) => {
    return (
        <button onClick={onClick} className={`flex justify-center items-center bg-${bgColor} text-${textColor} font-bold w-full h-[45px] border border-${borderColor} text-sm`}>
            <div className="flex gap-x-[15px]">
                {icon && <img src={icon} alt="icon" />} 
                {buttonName}
            </div>
        </button>
    );
};

export default ButtonSign;