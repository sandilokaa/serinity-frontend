import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, selectSearchItemProducts, selectSearchItemProductsStatus } from "../../redux/slices/SearchItemSlice";
import { ReactComponent as CloseIcon } from "../../assets/images/icons/close.svg";

import CurrencyFormatter from "../../assets/js/CurrencyFormatter";


const SearchModal = ({ onClose }) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [isEntering, setIsEntering] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    const dispacth = useDispatch();
    const products = useSelector(selectSearchItemProducts);
    const status = useSelector(selectSearchItemProductsStatus);

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

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchTerm.trim() !== "") {
                dispacth(fetchData({ name: searchTerm, category: null }));
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [searchTerm, dispacth]);

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
                    <div className="flex items-center">
                        <p className="font-medium text-sm">SEARCH SERINITY.COM</p>
                    </div>
                    <div onClick={handleClose} className="flex items-center cursor-pointer">
                        <CloseIcon />
                    </div>
                </div>
                <div className="mt-[35px]">
                    <div className="flex items-center">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value.toUpperCase())}
                            placeholder="Type to search..."
                            className="p-0 border-none border-b border-[#CACACA] w-full h-[45px] text-sm placeholder:text-xs focus:outline-none"
                        />
                    </div>
                    <hr />
                </div>
                <div className="mt-10">
                    {status === "loading" && <p className="text-xs">Loading...</p>}
                    {status === "succeeded" && products.length === 0 && <p className="text-xs">Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>}
                    {status === "succeeded" && products.length > 0 && (
                        <div className="grid grid-cols-2 gap-5">
                            {products.map((product) => {
                                const imageUrl =
                                    product.images.length > 0
                                        ? product.images[0]?.image_url
                                        : "";
                                return (
                                    <div key={product.id}
                                        className="flex flex-col gap-y-[10px] cursor-pointer"
                                    >
                                        <img
                                            src={`http://localhost:8080/${imageUrl}`}
                                            alt="img"
                                            loading="lazy"
                                            className="w-full"
                                        />
                                        <div className="flex flex-col text-center gap-y-[5px]">
                                            <p className="font-medium text-sm">{product.name}</p>
                                            <p className="font-medium text-sm">{CurrencyFormatter(product.price)}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                    {status === "failed" && <p className="text-xs">Error loading data.</p>}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;