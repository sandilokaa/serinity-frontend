import React, { useEffect, useState } from "react";

import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg";


const BagModal = ({ onClose }) => {

    const [isEntering, setIsEntering] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [activeTab, setActiveTab] = useState('shoppingBag');

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
                    <div className="flex gap-x-5">
                        <p
                            className={
                                `cursor-pointer ${activeTab === 'shoppingBag' ? 'font-bold text-black' : 'font-bold text-[#CACACA]'}`
                            }
                            onClick={() => setActiveTab('shoppingBag')}
                        >
                            Shopping Bag <sup className={`${activeTab === 'shoppingBag' ? 'text-black' : 'text-[#CACACA]'}`}>0</sup>
                        </p>
                        <p
                            className={
                                `cursor-pointer ${activeTab === 'recentlyViewed' ? 'font-bold text-black' : 'font-bold text-[#CACACA]'}`
                            }
                            onClick={() => setActiveTab('recentlyViewed')}
                        >
                            Recently Viewed <sup className={`${activeTab === 'recentlyViewed' ? 'text-black' : 'text-[#CACACA]'}`}>0</sup>
                        </p>
                    </div>
                    <div onClick={handleClose} className="cursor-pointer">
                        <CloseIcon />
                    </div>
                </div>
                <div className="mt-5">
                    <hr />
                </div>
                {activeTab === 'shoppingBag' && (
                    <div className="mt-[25px]">
                        <p className="text-sm">There is no product in the cart</p>
                    </div>
                )}
                {activeTab === 'recentlyViewed' && (
                    <div className="mt-[25px]">
                        <p className="text-sm">Recently viewed products</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BagModal;