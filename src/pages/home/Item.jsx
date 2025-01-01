import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataCloth, selectNewArrivalProducts, selectNewArrivalProductsStatus } from "../../redux/slices/NewArrivalSlice";

import { ReactComponent as SearchIcon } from "../../assets/images/icons/search.svg";
import { ReactComponent as WishlistIcon } from "../../assets/images/icons/wishlist.svg";

import CurrencyFormatter from "../../assets/js/CurrencyFormatter";
import ModalItemDetail from "../../components/common/modal/ModalItemDetail";

const HomeItem = () => {

    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [imageHovered, setImageHovered] = useState(null);

    const dispatch = useDispatch();
    const products = useSelector(selectNewArrivalProducts);
    const productsStatus = useSelector(selectNewArrivalProductsStatus);

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchDataCloth());
        }
    }, [productsStatus, dispatch]);

    const handleMouseEnterImage = () => setImageHovered(true);
    const handleMouseLeaveImage = () => setImageHovered(false);

    const imageUrl = products[0]?.images.length > 0 ? (imageHovered ? products[0].images[1]?.image_url : products[0].images[0]?.image_url) : '';

    return (
        <div className="mt-24">
            {isModalOpen &&
                <ModalItemDetail
                    onClose={() => {
                        setIsModalOpen(false)
                    }
                    }
                    productId={selectedProductId}
                />
            }
            <div className="lg:px-20">
                <div className="flex flex-col lg:gap-y-[10px]">
                    <p className="font-medium lg:text-4xl">New Arrivals</p>
                    <p className="text-lg">Exciting New Pieces to Elevate Your Wardrobe</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-4 justify-between gap-y-10 gap-x-5">
                        {products.map(product => (
                            <div
                                className="relative group"
                                key={product.id}
                                onClick={() => {
                                    navigate(`/item/detail/${product.id}`);
                                    setTimeout(() => {
                                        window.scrollTo(0, 0);
                                    }, 100);
                                }}
                                onMouseEnter={handleMouseEnterImage}
                                onMouseLeave={handleMouseLeaveImage}
                            >
                                <img
                                    src={`http://localhost:8080/${imageUrl}`}
                                    alt="img"
                                    loading="lazy"
                                    className="w-full rounded-[20px]"
                                />
                                <div className="absolute flex justify-start top-0 w-auto h-auto">
                                    {product.sale === true ? (
                                        <div className="bg-[#5184AE]">
                                            <p className="text-[12px] py-1 px-2 text-white">SALE!</p>
                                        </div>
                                    ) : null}
                                </div>
                                <div className="absolute inset-0 top-10 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer z-10 mr-5 d">
                                    <div className="flex flex-col gap-y-[10px]">
                                        <div className="flex items-center justify-end">
                                            {isHovered === 'wishlist' && (
                                                <span className="mr-4 bg-black text-white px-2 py-1">
                                                    Add to Wishlist
                                                </span>
                                            )}
                                            <button
                                                className="flex justify-center items-center h-[35px] w-[35px] bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-0 hover:shadow-md"
                                                onMouseEnter={() => setIsHovered('wishlist')}
                                                onMouseLeave={() => setIsHovered(null)}
                                            >
                                                <WishlistIcon className="transition colors duration-0" />
                                            </button>
                                        </div>
                                        <div className="flex items-center justify-end">
                                            {isHovered === 'preview' && (
                                                <span className="mr-4 bg-black text-white px-2 py-1">
                                                    Preview
                                                </span>
                                            )}
                                            <button
                                                className=" flex justify-center items-center h-[35px] w-[35px] bg-white rounded-full shadow-md hover:bg-black hover:text-white transition-colors duration-0 hover:shadow-md"
                                                onMouseEnter={() => setIsHovered('preview')}
                                                onMouseLeave={() => setIsHovered(null)}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    setSelectedProductId(product.id);
                                                    setIsModalOpen(true);
                                                }}
                                            >
                                                <SearchIcon className="transition colors duration-0" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[10px]">
                                    <div className="flex flex-col text-center gap-y-[10px] font-medium">
                                        <p>{product.name}</p>
                                        <p>{CurrencyFormatter(product.price)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeItem;