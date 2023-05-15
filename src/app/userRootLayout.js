import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollToTop/ScrollToTop";

const UserRootLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Toaster
                position='bottom-center'
                reverseOrder={false}
                gutter={8}
                containerStyle={{
                    bottom: "50px",
                }}
                toastOptions={{
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                }}
            />
            <ScrollTop/>
            <Footer />
        </>
    );
};

export default UserRootLayout;
