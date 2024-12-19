import React from "react";

import BadgeDiscover from "../../components/common/badge/BadgeDiscover";

import DiscoverImage from "../../assets/images/general/disover-img-1.svg";

const HomeDiscover = () => {
    return (
        <div className="mt-24">
            <div className="lg:px-20">
                <div className="flex flex-col lg:gap-y-[10px]">
                    <p className="font-medium lg:text-4xl">More to Discover</p>
                    <p className="text-lg">Unveiling New Horizons and Opportunities</p>
                </div>
                <div className="flex gap-x-5 mt-10">
                    <div className="flex-2 relative rounded-[15px]">
                        <img src={DiscoverImage} alt="DiscoverImage" className="w-full" loading="lazy" />
                        <div className="flex absolute top-0 px-9 py-[25px] w-auto">
                            <BadgeDiscover
                                badgeName="COMMUNITY INITIATIVE"
                            />
                        </div>
                        <div className="absolute bottom-0 px-9 py-[25px]">
                            <p className="text-[64px] text-white font-bold">#FROMUSFORUS</p>
                        </div>
                    </div>
                    <div className="flex-1 relative bg-[#5184AE] rounded-[15px]">
                        <div className="absolute top-0 w-auto px-9 py-[25px]">
                            <BadgeDiscover
                                badgeName="SPECIAL OFFERS"
                            />
                        </div>
                        <div className="absolute bottom-0 px-9 py-[25px]">
                            <p className="mt-10 font-bold text-white text-[48px]">Get 20% Off on Selected Sale Items This Season!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDiscover;