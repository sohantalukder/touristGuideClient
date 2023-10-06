/* eslint-disable react-hooks/exhaustive-deps */
import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import { Toaster, toast } from "react-hot-toast";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Footer from "./components/footer/Footer.jsx";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./utils/seo/SEO";
import SmoothScroll from "./utils/smoothScroll/SmoothScroll";
import { usePreferenceMutation } from "./redux/slice/preference/preferenceApi";
import { useEffect } from "react";
import loaderAnimation from "./assets/lottie/home_loader.json";
import LottiePlayer from "lottie-react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "./redux/slice/authentication/authSlice";
import { signal } from "@preact/signals-react";
const App = () => {
    const [preference, { isLoading, error }] = usePreferenceMutation();
    const data = signal({});
    const dispatch = useDispatch();
    const getData = async () => {
        const result = await preference();
        const { records, status } = result?.data?.response || {};
        if (status?.code === 200) {
            data.value = records;
            return;
        } else {
            toast.error(error || status?.message);
        }
    };
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            const userInfoFromStorage = Cookies.get("auth")
                ? JSON.parse(Cookies.get("auth"))
                : {};

            dispatch(userLoggedIn(userInfoFromStorage));
            getData();
        }
        return () => (isMounted = false);
    }, [dispatch]);
    return (
        <>
            <HelmetProvider>
                {isLoading && Object?.keys(data.value)?.length === 0 ? (
                    <LottiePlayer
                        animationData={loaderAnimation}
                        loop={true}
                        style={{ height: "100vh", width: "100%" }}
                    />
                ) : (
                    <SmoothScroll>
                        <SEO
                            title={data.value?.website_name}
                            description={data.value?.website_description}
                            name={data.value?.website_name}
                            type={data.value?.website_keywords}
                        />
                        <NavBar />
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
                        <ScrollTop />
                        <Footer />
                    </SmoothScroll>
                )}
            </HelmetProvider>
        </>
    );
};

export default App;
