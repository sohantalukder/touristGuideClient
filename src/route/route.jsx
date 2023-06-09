import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/register";
import OTPVerification from "../authentication/otp/OTPVerification";
import App from "../App";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/otp' element={<OTPVerification />} />
        </Route>
    )
);

export default router;
