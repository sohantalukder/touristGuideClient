"use client";
import Image from "next/image";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import logo from "../../assets/logo/Black logo.svg";
import { useParams } from "next/navigation";
const page = (props) => {
    const [otp, setOtp] = useState("");
    const params = useParams();
    console.log("🚀 ~ file: page.js:10 ~ page ~ params:", props);
    return (
        <div className='container mx-auto max-w-[1180px] px-4 lg:px-6 py-16   flex items-center justify-center'>
            <div className=' bg-white w-[400px] md:w-[500px] lg:w-[600px] py-10 px-16 rounded-md mx-auto shadow-custom'>
                <div className='w-full flex flex-col items-center justify-center '>
                    <Image src={logo} alt='Logo' className='w-32' />
                    <h3 className='text-lg text-center font-semibold mt-2 mb-6'>
                        Otp Verification
                    </h3>
                    <form className='mb-5'>
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={6}
                            renderSeparator={<span>-</span>}
                            renderInput={(props) => <input {...props} />}
                            inputStyle={
                                "h-12 !w-12 !border border-gray m-2.5 text-lg text-black rounded-sm  outline-none bg-white focus:bg-gray-50 focus:border-gray"
                            }
                        />
                    </form>
                    <button className=' text-green transition-all rounded-sm  hover:bg-black px-8  py-3'>
                        Resend Otp
                    </button>
                </div>
            </div>
        </div>
    );
};

export default page;
