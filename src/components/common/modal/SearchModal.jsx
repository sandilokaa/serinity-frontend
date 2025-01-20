import React, { useEffect, useState } from "react";

import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg";


const SearchModal = ({ onClose }) => {

    const [isEntering, setIsEntering] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        setIsEntering(true);
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <div
            className={`fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isExiting ? "opacity-0" : "opacity-100"
                }`}
        >
            <div
                className={`bg-white w-[470px] p-[45px] transform transition-transform duration-300 ${isEntering ? "translate-x-0" : "translate-x-full"
                    } ${isExiting ? "translate-x-full" : ""}`}
            >
                <div className="flex justify-between">
                    <div>
                        <p className="font-bold">Search serinity.com</p>
                    </div>
                    <div onClick={handleClose} className="cursor-pointer">
                        <CloseIcon />
                    </div>
                </div>
                <div className="mt-[35px]">
                    <div className="flex items-center">
                        <input 
                            placeholder="Type to search..." 
                            className="p-0 border-none border-b border-[#CACACA] w-full h-[45px] text-sm placeholder:text-xs focus:outline-none"  
                        />
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    );
};

export default SearchModal;