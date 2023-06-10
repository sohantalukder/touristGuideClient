import { useGoogleLogin } from "@react-oauth/google";
import React from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../../redux/slice/authentication/authSlice";
import { FcGoogle } from "react-icons/fc";
import { BASE_API_URL } from "../../../config";
import { mutation, query } from "../apiRequest/apiRequest";

const GoogleLogin = () => {
    const dispatch = useDispatch();
    const googleClick = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const userInfo = await query(
                "https://www.googleapis.com/oauth2/v3/userinfo",
                "GET",
                tokenResponse?.access_token
            );
            const getLogin = await mutation(
                `${BASE_API_URL}/auth/googleLogin`,
                "POST",
                userInfo
            );
            dispatch(userLoggedIn(getLogin?.response?.records));
        },
    });
    return (
        <div className='flex justify-center items-center'>
            <button
                onClick={() => googleClick()}
                className='border border-mediumGray py-3 px-6 w-full lg:w-[473px] lg:px-0 flex justify-center items-center'
            >
                <FcGoogle className='mr-2 text-2xl' />
                Sign up with Google
            </button>
        </div>
    );
};

export default GoogleLogin;
