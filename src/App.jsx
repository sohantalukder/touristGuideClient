import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Footer from "./components/footer/Footer.jsx";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./utils/seo/SEO";
import SmoothScroll from "./utils/smoothScroll/SmoothScroll";
import loaderAnimation from "./assets/lottie/home_loader.json";
import LottiePlayer from "lottie-react";
import useApp from "./useApp.hook";
const App = () => {
    const { preferenceData, isLoading, route } = useApp();
    return (
        <>
            <HelmetProvider>
                {isLoading && Object?.keys(preferenceData)?.length === 0 ? (
                    <LottiePlayer
                        animationData={loaderAnimation}
                        loop={true}
                        style={{ height: "100vh", width: "100%" }}
                    />
                ) : (
                    <SmoothScroll>
                        <SEO
                            title={preferenceData?.website_name}
                            description={preferenceData?.website_description}
                            name={preferenceData?.website_name}
                            type={preferenceData?.website_keywords}
                        />
                        {route ? <></> : <NavBar />}
                        <Outlet />
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
                        <ScrollTop /> {route ? <></> : <Footer />}
                    </SmoothScroll>
                )}
            </HelmetProvider>
        </>
    );
};

export default App;
