import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Footer from "./components/footer/Footer.jsx";

function App() {
    return (
        <>
            {/* <NavBar /> */}
            {<Outlet />}
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
            <ScrollTop />
            <Footer />
        </>
    );
}

export default App;
