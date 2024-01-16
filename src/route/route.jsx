import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/Register";
import OTPVerification from "../authentication/otp/OTPVerification";
import App from "../App";
import PrivateRoute from "../utils/privateRoute/PrivateRoute";
import Home from "../page/user/home/Home";
import Profile from "../page/user/profile/Profile.";
import NotFound from "../page/notFound/NotFound";
import { routes } from "./routeName";
import AdminLogin from "../authentication/login/AdminLogin";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={routes.default} element={<App />}>
            <Route path={routes.notFound} element={<NotFound />} />
            {/* For User */}
            <Route path={routes.default} exact element={<Home />} />
            <Route path={routes.home} element={<Home />} />
            <Route path={routes.login} element={<Login />} />
            <Route
                path={routes.profile}
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route path={routes.register} element={<Register />} />
            <Route path={routes.otp} element={<OTPVerification />} />

            {/* For Admin */}
            <Route path={routes.adminLogin} element={<AdminLogin />} />
        </Route>
    )
);

export default router;
