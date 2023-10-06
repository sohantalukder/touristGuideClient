import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { mutation, query } from "../../utils/apiRequest/apiRequest";
import { BASE_API_URL } from "../../../config";
import { toast } from "react-hot-toast";
import { userLoggedIn } from "../../redux/slice/authentication/authSlice";
import { effect } from "@preact/signals-react";
import "./otp.css";
const OTPVerification = () => {
    const { state } = useLocation() || {};
    const { token } = state?.data || "";
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const [resendOTP, setResendOTP] = useState(false);
    const dispatch = useDispatch();
    effect(() => {
        if (!token || user?.token) {
            navigate("/");
        }
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (otp?.length !== 6) {
            return;
        }
        setLoading(true);
        const result = await mutation(
            `${BASE_API_URL}/auth/emailVerification`,
            "POST",
            { otp: otp },
            token
        );
        if (!result) {
            return;
        }
        setLoading(false);
        const { status, records } = result?.response || {};
        if (status?.code === 200) {
            toast.success(status?.message);
            navigate("/");
            dispatch(userLoggedIn(records));
            setOtp("");
            return;
        }

        toast.error(status?.message);
        setOtp("");
    };
    const resendOtp = async () => {
        setResendOTP(true);
        const URL = `${BASE_API_URL}/auth/resendVerifyOTP`;
        const result = await query(URL, "GET", token);
        if (!result) return;
        setResendOTP(false);
        const { status } = result?.response || {};
        if (status?.code === 200) {
            toast.success(status?.message);
            return;
        }
        toast.error(status?.message);
    };
    return (
        <div className='oTPContainer'>
            <div className=' otpShadow1 shadow-custom'>
                <div className='w-full flex flex-col '>
                    <h3 className='text-lg text-center font-semibold mt-2 '>
                        Otp Verification
                    </h3>
                    <p className='text-center text-sm mb-6'>
                        Type your 6 digit security code
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        className='flex flex-col items-center'
                    >
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span className='w-4'></span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={"otpBox"}
                        />
                        <button
                            type='submit'
                            disabled={loading}
                            className='submitButton'
                        >
                            {loading ? "Loading..." : "Submit"}
                        </button>
                    </form>
                    <div className='text-black text-sm mt-5'>
                        Do not get the code?{" "}
                        <button
                            disabled={resendOTP}
                            onClick={resendOtp}
                            className='text-green ml-0.5 font-semibold'
                        >
                            Resend
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OTPVerification;
