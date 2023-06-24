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

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='/' exact element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route
                path='/profile'
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route path='/register' element={<Register />} />
            <Route path='/otp' element={<OTPVerification />} />
        </Route>
    )
);

export default router;
