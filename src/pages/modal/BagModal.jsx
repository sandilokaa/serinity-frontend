import React, { useEffect, useState } from "react";

import { ReactComponent as CloseIcon } from "../../assets/images/icons/close.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/icons/arrow-down.svg";


const BagModal = ({ onClose }) => {

    const [isEntering, setIsEntering] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [activeTab, setActiveTab] = useState('shoppingBag');
    const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);

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

    const toggleRecommendation = () => {
        setIsRecommendationOpen(!isRecommendationOpen);
    };

    return (
        <div
            className={`fixed inset-0 flex justify-end bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${isExiting ? "opacity-0" : "opacity-100"
                }`}
        >
            <div
                className={`bg-white border border-l-[1px] transform transition-all duration-300 ${isRecommendationOpen ? "pt-[45px] pb-[45px] pl-[10px] pr-[10px] w-[220px]" : "pt-[45px] pb-[45px] pl-0 pr-0 w-[30px]"
                    } flex flex-col items-center`}
            >
                <div className="flex gap-x-2 h-full">
                    <div className="flex items-center justify-center h-full">
                        <button
                            onClick={toggleRecommendation}
                            className="cursor-pointer flex items-center justify-center"
                        >
                            {isRecommendationOpen ? (
                                <ArrowRight className="-rotate-90" />

                            ) : (
                                <ArrowRight className="rotate-90" />
                            )}
                        </button>
                    </div>
                    {isRecommendationOpen && (
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <p className="font-medium text-sm">RECOMMENDATION</p>
                            </div>
                            <div className="mt-[50px] flex flex-col gap-4">
                                <div>
                                    <img src="/path/to/image1.jpg" alt="Tshirt Firea Black Serenity" className="w-full h-auto" />
                                    <p className="text-sm mt-2">Tshirt Firea Black Serenity</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                className={`bg-white w-[470px] p-[45px] transform transition-transform duration-300 ${isEntering ? "translate-x-0" : "translate-x-full"
                    } ${isExiting ? "translate-x-full" : ""}`}
            >
                <div className="flex justify-between">
                    <div className="flex items-center gap-x-5">
                        <p
                            className={
                                `cursor-pointer text-sm ${activeTab === 'shoppingBag' ? 'font-medium text-black' : 'font-medium text-[#CACACA]'}`
                            }
                            onClick={() => setActiveTab('shoppingBag')}
                        >
                            SHOPPING BAG <sup className={`${activeTab === 'shoppingBag' ? 'text-black' : 'text-[#CACACA]'}`}>0</sup>
                        </p>
                        <p
                            className={
                                `cursor-pointer text-sm ${activeTab === 'recentlyViewed' ? 'font-medium text-black' : 'font-medium text-[#CACACA]'}`
                            }
                            onClick={() => setActiveTab('recentlyViewed')}
                        >
                            RECENTLY VIEWED <sup className={`${activeTab === 'recentlyViewed' ? 'text-black' : 'text-[#CACACA]'}`}>0</sup>
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