import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchDataClothDetail, selectClothDetail, resetProductDetail } from "../../redux/slices/ItemDetailSlice";
import CurrencyFormatter from "../../assets/js/CurrencyFormatter";

const ItemDestination = () => {

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

    return (
        <div className="pt-20">
            <div className="lg:px-20 pt-12">
                <div className="grid grid-cols-2 gap-x-5 mt-5">
                    <div className="flex items-center justify-center w-full h-[420px] bg-[#F2F2F2] py-5 px-10 rounded-[20px]">
                        <div>
                            {product.images && product.images.length > 0 && product.images[0].image_url ? (
                                <img
                                    src={`http://localhost:8080/${product.images[0].image_url}`}
                                    alt="img"
                                    className="w-full lg:h-[420px]"
                                    style={{
                                        mixBlendMode: 'multiply'
                                    }}
                                />
                            ) : (
                                <p>No image available</p>
                            )}
                            <div>
                                
                            </div>
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
                                <p className="font-bold">Available Color</p>
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
                                                    className="flex justify-center items-center w-[40px] h-[40px] rounded-full"
                                                    style={{
                                                        background: variation.stock === 0 ? '#F2F2F2' : 'transparent',
                                                        border: variation.stock === 0 ? '1px solid #F2F2F2' : '1px solid #000000',
                                                        color: variation.stock === 0 ? '#CACACA' : '#000000',
                                                        cursor: variation.stock === 0 ? 'default' : 'pointer'
                                                    }}
                                                >
                                                    <div>
                                                        <p>{variation.size}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDestination;