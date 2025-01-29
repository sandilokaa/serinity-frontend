import React from "react";
import HomeLayout from "../../components/layout/home/HomeLayout";
import ShopSideBar from "../../components/layout/sidebar/ShopSidebar";

import { ReactComponent as ArrowRight } from "../../assets/images/icons/arrow-down.svg";

const Shop = () => {
    return (
        <HomeLayout>
            <div className="mt-20">
                <div className="lg:px-20">
                    <div className="flex gap-x-24">
                        <div className="pt-20">
                            <ShopSideBar />
                        </div>
                        <div className="pt-[90px]">
                            <div className="flex items-center gap-x-1">
                                <p>Beranda</p>
                                <ArrowRight className="-rotate-90"/>
                                <p>Shop</p>
                            </div>
                            <div className="mt-[15px]">
                                <p className="font-bold text-4xl">All Products</p>
                            </div>
                            <div className="mt-[25px]">
                                <p>Showing 1-16 of 52 Results</p>
                            </div>
                            <div className="mt-[50px]">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
};

export default Shop;