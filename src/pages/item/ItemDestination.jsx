import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchDataClothDetail, selectClothDetail, resetProductDetail } from "../../redux/slices/ItemDetailSlice";
import ModalChartNote from "../modal/ModalChartNote";


import CurrencyFormatter from "../../assets/js/CurrencyFormatter";
import ButtonSubmit from "../../components/common/button/ButtonSubmit";

import { ReactComponent as WishlistIcon } from "../../assets/images/icons/wishlist.svg";
import { ReactComponent as NegativeIcon } from "../../assets/images/icons/negative.svg";
import { ReactComponent as PositiveIcon } from "../../assets/images/icons/positive.svg";

const ItemDestination = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const dispatch = useDispatch();
    const product = useSelector(selectClothDetail);
    const [selectedColor, setSelectedColor] = useState('#000000');

    const params = useLocation();
    const id = (params.pathname).split('/')[3];

    useEffect(() => {
        if (id) {
            dispatch(resetProductDetail());
            dispatch(fetchDataClothDetail(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (product && product.variations && product.variations.length > 0) {
            setSelectedColor(product.variations[0].color);
        }
    }, [product]);

    const [isCounter, setIsCounter] = useState(1);

    const handleIncrease = () => {
        setIsCounter(currentCount => currentCount + 1);
    };

    const handleDecrease = () => {
        if (isCounter > 1) {
            setIsCounter(currentCount => currentCount - 1);
        }
    };


    return (
        <div className="pt-20">
            {isModalOpen &&
                <ModalChartNote
                    onClose={() => {
                        setIsModalOpen(false)
                    }}
                    productId={selectedProductId}
                />
            }
            <div className="lg:px-20 pt-12">
                <div className="flex gap-x-5">
                    <div className="flex items-center justify-center w-full h-[580px] bg-[#F2F2F2] rounded-[5px]">
                        {product.images && product.images.length > 0 && product.images[0].image_url ? (
                            <img
                                src={`http://localhost:8080/${product.images[0].image_url}`}
                                alt="img"
                                className="w-full"
                                style={{
                                    mixBlendMode: 'multiply'
                                }}
                                loading="lazy"
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <div>
                            {product.images && product.images.length > 0 && product.images[1].image_url ? (
                                <img
                                    src={`http://localhost:8080/${product.images[1].image_url}`}
                                    alt="img"
                                    className="rounded-[10px]"
                                    style={{
                                        mixBlendMode: 'multiply'
                                    }}
                                    loading="lazy"
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex flex-col gap-y-[10px]">
                            <p className="text-sm font-medium">SERINITY/ {product.category?.category}</p>
                            <p className="text-2xl font-medium">{product?.name}</p>
                            <div className="flex gap-x-5 items-center">
                                <p className="text-2xl font-medium">{CurrencyFormatter(product?.price)}</p>
                                {product.sale === true ? (
                                    <div className="bg-[#5184AE]">
                                        <p className="text-[12px] py-1 px-2 text-white">SALE!</p>
                                    </div>
                                ) : null}
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <p className="font-bold">Description</p>
                                <p>{product?.description}</p>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <p className="font-bold">Color</p>
                                <div className="flex justify-center items-center border border-black w-[40px] h-[40px] rounded-full">
                                    <div style={{ background: selectedColor }} className="w-[30px] h-[30px] rounded-full"></div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <p className="font-bold">Size</p>
                                <div>
                                    {product && product.variations && product.variations.length > 0 ? (
                                        <div className="flex gap-x-[10px]">
                                            {product.variations.map((variation, index) => (
                                                <div
                                                    key={index}
                                                    className="flex justify-center items-center w-[40px] h-[40px] rounded-full relative"
                                                    style={{
                                                        background: variation.stock === 0 ? '#F2F2F2' : 'transparent',
                                                        border: variation.stock === 0 ? '1px solid #F2F2F2' : '1px solid #000000',
                                                        color: variation.stock === 0 ? '#CACACA' : '#000000',
                                                        cursor: variation.stock === 0 ? 'default' : 'pointer'
                                                    }}
                                                    onMouseEnter={() => setIsHovered(index)}
                                                    onMouseLeave={() => setIsHovered(null)}
                                                >
                                                    <div>
                                                        <p>{variation.size}</p>
                                                        {isHovered === index && (
                                                            <div className="absolute top-[-30px] left-[-10px] bg-black text-white text-[10px] px-2 py-1 rounded shadow-lg w-[60px]">
                                                                <p className="text-center">Stock: {variation.stock}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-[10px]">
                                <p className="font-bold">Size Chart & Note</p>
                                <p
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => {
                                        setIsModalOpen(true);
                                        setSelectedProductId(product.id);
                                    }}
                                >
                                    Click to see size chart & note
                                </p>
                            </div>
                            <div className="flex gap-x-[10px] mt-5">
                                <div className="flex items-center border border-black rounded-[5px] py-2 px-2">
                                    <div className="flex justify-center items-center gap-[7px] h-full">
                                        <div onClick={handleDecrease} className="flex items-center h-full cursor-pointer">
                                            <NegativeIcon />
                                        </div>
                                        <div className="px-3 border-x-[#F2F2F2] border-x-[1px]">
                                            {isCounter}
                                        </div>
                                        <div onClick={handleIncrease} className="flex items-center h-full cursor-pointer">
                                            <PositiveIcon />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center flex-grow">
                                    <ButtonSubmit
                                        buttonName="Checkout Now"
                                        fontSize="16px"
                                        width="100%"
                                        borderRadius="5px"
                                    />
                                </div>
                                <div className="flex items-center">
                                    <div className="flex items-center border border-black h-full rounded-[5px] py-2 px-4 cursor-pointer">
                                        <WishlistIcon />
                                    </div>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <p>Estimated delivery: <strong>1 - 7 days</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDestination;