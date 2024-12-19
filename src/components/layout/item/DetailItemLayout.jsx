import React from "react";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const DetailItemLayout = ({ children }) => {
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

export default DetailItemLayout;