import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import LoginModal from "../../../pages/modal/LoginModal";
import RegisterModal from "../../../pages/modal/RegisterModal";
import SearchModal from "../../../pages/modal/SearchModal";
import BagModal from "../../../pages/modal/BagModal";
import ForgotPassword from "../../../pages/modal/ForgotPassword";

const Navbar = () => {

    const navigate = useNavigate();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isBagModalOpen, setIsBagModalOpen] = useState(false);
    const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] = useState(false);

    const [isSwitching, setIsSwitching] = useState(false);

    return (
        <nav className="fixed top-0 z-50 shadow-md bg-white text-black w-full">
            {isLoginModalOpen && !isSwitching &&
                <LoginModal
                    onClose={() => setIsLoginModalOpen(false)}
                    onSwitchToRegister={() => {
                        setIsSwitching(true);
                        setTimeout(() => {
                            setIsLoginModalOpen(false);
                            setIsRegisterModalOpen(true);
                            setIsSwitching(false);
                        }, 0)
                    }}
                    onSwitchToForgotPassword={() => {
                        setTimeout(() => {
                            setIsLoginModalOpen(false);
                            setIsForgotPasswordModalOpen(true);
                            setIsSwitching(false);
                        }, 0)
                    }}
                />
            }
            {isRegisterModalOpen && !isSwitching &&
                <RegisterModal
                    onClose={() => setIsRegisterModalOpen(false)}
                    onSwitchToLogin={() => {
                        setIsSwitching(true);
                        setTimeout(() => {
                            setIsRegisterModalOpen(false);
                            setIsLoginModalOpen(true);
                            setIsSwitching(false)
                        }, 0)
                    }}
                    onSwitchToForgotPassword={() => {
                        setTimeout(() => {
                            setIsRegisterModalOpen(false);
                            setIsForgotPasswordModalOpen(true);
                            setIsSwitching(false);
                        }, 0)
                    }}
                />
            }
            {isForgotPasswordModalOpen &&
                <ForgotPassword
                    onClose={() => setIsForgotPasswordModalOpen(false)}
                    onSwitchToLogin={() => {
                        setIsSwitching(true);
                        setTimeout(() => {
                            setIsForgotPasswordModalOpen(false);
                            setIsLoginModalOpen(true);
                            setIsSwitching(false)
                        }, 0)
                    }}
                    onSwitchToRegister={() => {
                        setIsSwitching(true);
                        setTimeout(() => {
                            setIsForgotPasswordModalOpen(false);
                            setIsRegisterModalOpen(true);
                            setIsSwitching(false);
                        }, 0)
                    }}
                />
            }
            {isSearchModalOpen &&
                <SearchModal
                    onClose={() => setIsSearchModalOpen(false)}
                />
            }
            {isBagModalOpen &&
                <BagModal
                    onClose={() => setIsBagModalOpen(false)}
                />
            }


            <div className="mx-auto lg:px-20">
                <div className="flex items-center justify-between mx-auto h-20">
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => {
                            navigate('/');
                            setTimeout(() => {
                                window.scrollTo(0, 0);
                            }, 100);
                        }}
                    >
                        <p className="text-2xl font-bold">SERINITY</p>
                    </div>
                    <div className="flex items-center gap-x-[25px] text-base">
                        <p
                            className="cursor-pointer hover:text-gray-700 transition"
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    window.scrollTo(0, 0);
                                }, 100);
                            }}
                        >
                            BERANDA -
                        </p>
                        <p
                            className="cursor-pointer hover:text-gray-700 transition"
                            onClick={() => {
                                navigate('/shop');
                                setTimeout(() => {
                                    window.scrollTo(0, 0);
                                }, 100);
                            }}
                        >
                            SHOP -
                        </p>
                        <p
                            className="cursor-pointer hover:text-gray-700 transition"
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    window.scrollTo(0, 0);
                                }, 100);
                            }}
                        >
                            SUPPORT -
                        </p>
                    </div>
                    <div className="flex items-center gap-x-[25px]">
                        <p className="cursor-pointer hover:text-gray-700 transition" onClick={() => setIsSearchModalOpen(true)}>SEARCH</p>
                        <p className="cursor-pointer hover:text-gray-700 transition" onClick={() => setIsBagModalOpen(true)}>BAG<span className="text-sm">(0)</span></p>
                        <p className="cursor-pointer hover:text-gray-700 transition" onClick={() => setIsLoginModalOpen(true)}>ACCOUNT</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;