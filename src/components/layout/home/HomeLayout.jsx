import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const HomeLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {children}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default HomeLayout;