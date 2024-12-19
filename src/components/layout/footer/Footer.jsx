import React from "react";

import SubscribeInput from "../../common/input/SubscribeInput";
import ButtonSubmit from "../../common/button/ButtonSubmit";

import { ReactComponent as InstagramIcon } from "../../../assets/images/icons/instagram.svg";
import { ReactComponent as TwitterIcon } from "../../../assets/images/icons/twitter.svg";
import { ReactComponent as TiktokIcon } from "../../../assets/images/icons/tiktok.svg";
import { ReactComponent as WhatsappIcon } from "../../../assets/images/icons/whatsapp.svg";

const Footer = () => {
    return (
        <>
            <div className="mt-[100px] border border-t-[#CACACA] border-b-[#CACACA]">
                <div className="mx-auto lg:px-20 lg:py-10">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-y-5">
                            <div>
                                <p className="font-bold text-2xl">SERINITY</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px] text-sm">
                                <p>Jl. Bukit Cemara Indah, Semarang, Indonesia.</p>
                                <p>+62876-8765-8765</p>
                                <p>serinity@gmail.com</p>
                            </div>
                            <div className="flex gap-x-[15px]">
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <InstagramIcon />
                                </div>
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <TwitterIcon />
                                </div>
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <TiktokIcon />
                                </div>
                                <div className="p-2 rounded-full border border-black cursor-pointer">
                                    <WhatsappIcon />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 text-sm">
                            <div>
                                <p className="font-bold">HOT CATEGORIES</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <p>Special Offers</p>
                                <p>T-Shirt Collection</p>
                                <p>Headwear</p>
                                <p>Hoodies</p>
                                <p>Bottoms</p>
                                <p>Bags</p>
                                <p>Accessories</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 text-sm">
                            <div>
                                <p className="font-bold">CUSTOMER SERVICE</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <p>Privacy Policy</p>
                                <p>Term & Conditions</p>
                                <p>Store Locations</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 text-sm">
                            <div>
                                <p className="font-bold">SIGN UP TO NEWSLETTER</p>
                            </div>
                            <div>
                                <p>Enter your email address to get updated information on Sales and Offers.</p>
                            </div>
                            <div className="flex gap-x-6">
                                <SubscribeInput />
                                <ButtonSubmit
                                    buttonName="SUBSCRIBE"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-10">
                <p className="text-sm">© 2024 SERINITY. All Rights Reserved</p>
            </div>
        </>
    );
};

export default Footer;