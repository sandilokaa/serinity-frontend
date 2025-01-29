import React from "react";

const ShopSideBar = () => {
    return (
        <div className="flex flex-col gap-y-[30px]">
            <div>
                <p className="font-bold text-2xl">Category</p>
            </div>
            <div className="flex flex-col gap-y-[15px]">
                <p className="text-base cursor-pointer hover:text-gray-700 transition">All Products</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Tshirt Collection</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Hoodies</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Bottoms</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Bags</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Headwear</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Accessories</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">New Arrivals</p>
                <p className="text-base cursor-pointer hover:text-gray-700 transition">Special Offers</p>
            </div>
        </div>
    );
};

export default ShopSideBar;