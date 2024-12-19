import React from "react";
import { CategoryTypeData } from "../../assets/data/CategoryType";
import { ReactComponent as ArrowTopRightIcon } from "../../assets/images/icons/arrow-top-right.svg";

const HomeCategory = () => {

    const groupedCategories = [];
    for (let i = 0; i < CategoryTypeData.Collections.length; i += 2) {
        groupedCategories.push(CategoryTypeData.Collections.slice(i, i + 2))
    }

    return (
        <div className="mt-24">
            <div className="lg:px-20">
                <div className="flex flex-col lg:gap-y-[10px]">
                    <p className="font-medium lg:text-4xl">Shop by Category</p>
                    <p className="text-lg">Navigate Our Diverse Collections for Every Occasion</p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-rows-1 grid-flow-col justify-between">
                        {groupedCategories.map((category, index) => {
                            return (
                                <div key={index} className="flex flex-col lg:gap-5">
                                    {category.map((data) => {
                                        return (
                                            <div className="relative cursor-pointer" key={data.id}>
                                                <img src={data.properties.image} alt={data.properties.alt} className="w-full h-auto object-cover" loading="lazy" />
                                                <div className="absolute flex justify-start bottom-0 left-0 right-0 px-6 py-[15px]">
                                                    <div className="flex gap-x-[5px] items-center px-4 py-2 bg-white text-black text-[16px] font-medium rounded-full w-auto">
                                                        <p>{data.properties.categoryName}</p>
                                                        <ArrowTopRightIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;