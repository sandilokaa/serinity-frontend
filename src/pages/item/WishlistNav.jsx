import React, { useState } from "react";

import Coba from "../../assets/images/general/hazella-1.png";
import { ReactComponent as SearchIcon } from "../../assets/images/icons/search.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close.svg";

const WishlistNav = ({ maxHeight }) => {

    const [isHovered, setIsHovered] = useState(null);

    return (
        <div>
            <div className="flex flex-col gap-y-2">
                <p className="font-medium text-sm">Wishlist <sup className="text-[#CACACA]">0</sup></p>
                <div className={`grid grid-cols-2 justify-between gap-y-5 gap-x-5 overflow-y-auto max-h-${maxHeight}`}>
                    <div
                        className="relative group"
                    >
                        <img
                            src={Coba}
                            alt="img"
                            loading="lazy"
                            className="w-full"
                        />
                        <div className="absolute inset-0 top-20 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer z-10 mr-[10px]">
                            <div className="flex flex-col gap-y-[5px]">
                                <div className="flex items-center justify-end">
                                    {isHovered === 'wishlist' && (
                                        <span className="mr-2 bg-black text-white px-2 py-1 text-xs">
                                            Remove from Wishlist
                                        </span>
                                    )}
                                    <button
                                        className="flex justify-center items-center h-[25px] w-[25px] bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-0 hover:shadow-md"
                                        onMouseEnter={() => setIsHovered('wishlist')}
                                        onMouseLeave={() => setIsHovered(null)}
                                    >
                                        <CloseIcon className="transition colors duration-0 h-[15px] w-[15px]" />
                                    </button>
                                </div>
                                <div className="flex items-center justify-end">
                                    {isHovered === 'preview' && (
                                        <span className="mr-2 bg-black text-white px-2 py-1 text-xs">
                                            See detail
                                        </span>
                                    )}
                                    <button
                                        className=" flex justify-center items-center h-[25px] w-[25px] bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-0 hover:shadow-md"
                                        onMouseEnter={() => setIsHovered('preview')}
                                        onMouseLeave={() => setIsHovered(null)}
                                        onClick={(event) => {
                                            event.stopPropagation();
                                        }}
                                    >
                                        <SearchIcon className="transition colors duration-0 h-[12px] w-[12px]" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[5px]">
                            <div className="flex flex-col text-center gap-y-[5px]">
                                <p className="font-medium text-sm">Hazzela Shirt Serinity</p>
                                <p className="font-medium text-sm">Rp. 256.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistNav;