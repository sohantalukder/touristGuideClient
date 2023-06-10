import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import { Toaster } from "react-hot-toast";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Footer from "./components/footer/Footer.jsx";
import { HelmetProvider } from "react-helmet-async";
import SEO from "./utils/seo/SEO";
import SmoothScroll from "./utils/smoothScroll/SmoothScroll";

function App() {
    return (
        <HelmetProvider>
            <SmoothScroll>
                <SEO
                    title='Tourist Guide'
                    description='Discover and explore your dream destinations with our tourist guide website. Immerse yourself in local culture, uncover hidden gems, and visit iconic landmarks. Enhance your travel experience by hiring experienced guides through our platform. Create unforgettable memories with us as your trusted companion on your next adventure.'
                    name='Tourist Guide'
                    type='travel, tour, tourist, guide'
                />
                <NavBar />
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
            </SmoothScroll>
        </HelmetProvider>
    );
}

export default App;
