import React from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

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
                    // Define default options
                    className: "",
                    duration: 5000,
                    style: {
                        background: "#363636",
                        color: "#fff",
                    },
                }}
            />
            <Footer />
        </>
    );
};

export default UserRootLayout;
