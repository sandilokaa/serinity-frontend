import React from "react";

import MainImage from "../../assets/images/general/main-img-1.svg";

const HomeHeading = () => {

    return (
        <div className="pt-20">
            <div className="bg-black">
                <div className="text-white py-3 text-center">
                    <p className="font-medium text-base">Instant Delivery is now available in Semarang area. Free shipping for standard delivery.</p>
                </div>
            </div>
            <div className="relative">
                <img src={MainImage} alt="MainImage" className="w-full h-auto object-cover" loading="lazy"/>
                <div className="absolute inset-0 lg:px-20">
                    <h1 className="m-0 font-bold text-white lg:text-[176px]">SERINITY</h1>
                    <div className="lg:mt-56 flex justify-between text-white lg:gap-x-32">
                        <p className="lg:text-xl">
                            where every price reflects a unique narrative of artistry and sophistication. 
                            Delve into our carefully curated selection of high-quality clothing, each piece 
                            designed not only to showcase exceptional craftsmanship but also to inspire and 
                            empower your personal sense of style and self-expression.
                        </p>
                        <p className="lg:text-sm lg:right-0">
                            From timeless classics to the latest trends, discover items that align perfectly with 
                            your distinctive fashion taste. Whether you're preparing for work, leisure activities, 
                            or special events, enhance every experience with our thoughtfully curated collection.
                        </p>
                    </div>
                    <div className="flex justify-start mt-6">
                        <p className="text-white lg:text-xl">Vol.1</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeading;