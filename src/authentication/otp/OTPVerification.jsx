import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { mutation, query } from "../../utils/apiRequest/apiRequest";
import { BASE_API_URL } from "../../../config";
import { toast } from "react-hot-toast";
import { userLoggedIn } from "../../redux/slice/authentication/authSlice";
const OTPVerification = () => {
    const { state } = useLocation() || {};
    const { token } = state?.data || "";
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!token || user?.token) {
            navigate("/");
        }
    }, [token, user]);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp?.length === 4) {
            setLoading(true);
            const URL = `${BASE_API_URL}/auth/emailVerification`;
            const result = await mutation(URL, "POST", { otp: otp }, token);
            if (result) {
                setLoading(false);
                const { status, records } = result?.response || {};
                console.log(records);
                if (status?.code === 200) {
                    toast.success(status?.message);
                    navigate("/");
                    dispatch(userLoggedIn(records));
                    setOtp("");
                    return;
                }
                toast.error(status?.message);
                setOtp("");
            }
        }
    };
    return (
        <div className='container mx-auto max-w-[1180px] px-4 lg:px-6 py-16   flex items-center justify-center'>
            <div className=' bg-white  py-10 px-8 sm:px-16 rounded-md mx-auto shadow-custom'>
                <div className='w-full flex flex-col '>
                    <h3 className='text-lg text-center font-semibold mt-2 '>
                        Otp Verification
                    </h3>
                    <p className='text-center text-sm mb-6'>
                        Type your 4 digit security code
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center'
                    >
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span className='w-4'></span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={
                                "h-12 !w-12 !border border-gray text-lg text-black rounded-sm bg-midWhite focus:border-green focus:outline-none"
                            }
                        />
                        <button
                            type='submit'
                            disabled={loading}
                            className='text-white bg-green px-4 py-1.5 flex justify-center items-center mt-3 text-center'
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>
                    <button className='text-black text-sm mt-5'>
                        Don't get the code?{" "}
                        <span className='text-green ml-0.5 font-semibold'>
                            Resend
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
