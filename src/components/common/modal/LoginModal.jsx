import React, { useEffect, useState } from "react";

import AuthInput from "../input/AuthInput";
import ButtonSign from "../button/ButtonSign";

import { ReactComponent as CloseIcon } from "../../../assets/images/icons/close.svg";
import GoogleIcon from "../../../assets/images/icons/google.svg";

import WishlistNav from "../../../pages/item/WishlistNav";


const LoginModal = ({ onClose, onSwitchToRegister }) => {

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
                        <p className="font-bold">Login</p>
                    </div>
                    <div onClick={handleClose} className="cursor-pointer">
                        <CloseIcon />
                    </div>
                </div>
                <div className="mt-[45px]">
                    <div className="flex flex-col gap-y-[25px]">
                        <div>
                            <AuthInput
                                placeholder="Email address *"
                            />
                        </div>
                        <div>
                            <AuthInput
                                placeholder="Password *"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[18px]">
                    <div className="flex justify-between">
                        <div>
                            <p
                                className="font-medium cursor-pointer text-sm"
                                onClick={() => {
                                    onSwitchToRegister();
                                }}

                            >
                                Create Account
                            </p>
                        </div>
                        <div>
                            <p className="font-medium cursor-pointer text-sm">Forgot Passoword?</p>
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <div className="flex flex-col gap-y-[15px]">
                        <div>
                            <ButtonSign
                                buttonName="Sign In"
                                bgColor="black"
                                textColor="white"
                            />
                        </div>
                        <div>
                            <ButtonSign
                                buttonName="Sign In with Google"
                                bgColor="white"
                                textColor="black"
                                borderColor="#CACACA"
                                icon={GoogleIcon}
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[40px]">
                    <hr />
                </div>
                <div className="mt-[30px]">
                    <WishlistNav 
                        maxHeight="52"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginModal;