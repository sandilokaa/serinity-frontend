import React, { useEffect, useState } from "react";

import AuthInput from "../../components/common/input/AuthInput";
import ButtonSign from "../../components/common/button/ButtonSign";

import { ReactComponent as CloseIcon } from "../../assets/images/icons/close.svg";

import WishlistNav from "../item/WishlistNav";


const RegisterModal = ({ onClose, onSwitchToLogin, onSwitchToForgotPassword }) => {

    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
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
                className={` bg-white w-[470px] p-[45px] transform transition-transform duration-300 ${isExiting ? "translate-x-full" : ""}`}
            >
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <p className="font-medium text-sm">CREATE AN ACCOUNT</p>
                    </div>
                    <div onClick={handleClose} className="flex items-center cursor-pointer">
                        <CloseIcon />
                    </div>
                </div>
                <div className="mt-[45px]">
                    <div className="flex flex-col gap-y-[25px]">
                        <div>
                            <AuthInput
                                placeholder="Username *"
                            />
                        </div>
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
                                    onSwitchToLogin();
                                }}
                            >
                                Already have an account?
                            </p>
                        </div>
                        <div>
                            <p 
                                className="font-medium cursor-pointer text-sm"
                                onClick={() => {
                                    onSwitchToForgotPassword();
                                }}
                            >
                                Forgot Passoword?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <div>
                        <div>
                            <ButtonSign
                                buttonName="Sign In"
                                bgColor="black"
                                textColor="white"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-[28px]">
                    <p className="text-sm">
                        Your personal data will be used to support your experience throughout this website, 
                        to manage access to your account, and for other purposes described in our [privacy_policy].
                    </p>
                </div>
                <div className="mt-[40px]">
                    <hr />
                </div>
                <div className="mt-[30px]">
                    <WishlistNav
                        maxHeight="24"
                    />
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;