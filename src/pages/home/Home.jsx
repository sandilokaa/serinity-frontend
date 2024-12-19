import React from "react";
import HomeLayout from "../../components/layout/home/HomeLayout";
import HomeHeading from "./Heading";
import HomeCategory from "./Category";
import HomeItem from "./Item";
import HomeDiscover from "./Discover";

import "../../assets/style/style.css";

const Home = () => {

    return (
        <HomeLayout>
            <HomeHeading/>
            <HomeCategory/>
            <HomeItem/>
            <HomeDiscover/>
        </HomeLayout>
    );
};

export default Home;