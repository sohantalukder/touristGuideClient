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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={routes.default} element={<App />}>
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
            {/* <t */}
            <Route path={routes.otp} element={<OTPVerification />} />
            <Route path={routes.notFound} element={<NotFound />} />
        </Route>
    )
);

export default router;
