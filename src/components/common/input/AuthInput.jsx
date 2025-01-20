import React from "react";

const AuthInput = ({placeholder}) => {
    return (
        <div className="flex items-center">
            <input placeholder={placeholder} className="p-[15px] border border-[#CACACA] w-full h-[45px] text-sm placeholder:text-xs"/>
        </div>
    );
};

export default AuthInput;