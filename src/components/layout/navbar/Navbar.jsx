import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as ArrowDownIcon } from "../../../assets/images/icons/arrow-down.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/search.svg";
import { ReactComponent as WishlistIcon } from "../../../assets/images/icons/wishlist.svg";
import { ReactComponent as CartIcon } from "../../../assets/images/icons/cart.svg";

import LoginModal from "../../common/modal/LoginModal";
import RegisterModal from "../../common/modal/RegisterModal";
import SearchModal from "../../common/modal/SearchModal";
import BagModal from "../../common/modal/BagModal";

import ButtonAuth from "../../common/button/ButtonAuth";

const Navbar = () => {

    const navigate = useNavigate();

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
    const [isBagModalOpen, setIsBagModalOpen] = useState(false);
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
                <div className="flex justify-between mx-auto h-20">
                    <div className="flex items-center gap-x-10">
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
                            <div className="flex items-center gap-x-[5px] cursor-pointer">
                                <a href="#home">Collections</a>
                                <ArrowDownIcon />
                            </div>
                            <a href="#home">New Arrivals</a>
                            <a href="#home">Lookbook</a>
                            <a href="#home">Sale</a>
                            <a href="#home">About</a>
                            <a href="#home">Contact</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-[15px]">
                        <div className="flex items-center gap-x-[15px]">
                            <SearchIcon className="cursor-pointer" onClick={() => setIsSearchModalOpen(true)}/>
                            <WishlistIcon className="cursor-pointer" />
                            <CartIcon className="cursor-pointer" onClick={() => setIsBagModalOpen(true)}/>
                        </div>
                        <ButtonAuth
                            buttonName="Account"
                            onClick={() => setIsLoginModalOpen(true)}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;