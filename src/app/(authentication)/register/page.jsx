"use client";
import React from "react";
import loginImage from "../../assets/sign-in-illustration.svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname, useParams } from "next/navigation";
import GoogleSignIn from "../../components/googleSignIn/googleSignIn";
import Form from "./form/form";
const Register = () => {
    const router = useRouter();
    const a = useParams();
    console.log(a);
    console.log(
        router.push("/otpVerification", {
            data: "records",
        })
    );

    return (
        <div className='container mx-auto max-w-[1180px] px-4 lg:px-0 py-16 '>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='w-full lg:w-[537px] hidden lg:block'>
                    <div className='flex flex-col justify-center text-center'>
                        <h1 className='text-4xl text-black font-bold mb-4'>
                            Welcome To Tourist
                            <span className='text-green'>Guide</span>
                        </h1>
                        <p className='mb-12'>
                            Our goal is to get to the place of your choice very
                            easily and let you enjoy the natural beauty of
                            Bangladesh.
                        </p>
                        <Image
                            src={loginImage}
                            className='w-auto h-auto'
                            alt=''
                        />
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col  text-left lg:text-center w-full '>
                        <div className='space-y-5'>
                            <h1 className='text-2xl text-green font-bold'>
                                Register
                            </h1>
                            <Form />
                            <div className='flex space-x-2 lg:space-x-10  justify-between items-center text-center px-6 w-full lg:w-[473px] lg:px-0 mx-auto'>
                                <div className='w-1/4 lg:w-1/3 border border-mediumGray'></div>

                                <p className='w-1/2  lg:w-1/3 text-center'>
                                    Or Register With
                                </p>
                                <div className=' w-1/4 lg:w-1/3 border border-mediumGray'></div>
                            </div>
                            <GoogleSignIn />
                            <div>
                                <p>
                                    I have an account!{" "}
                                    <Link
                                        href='/login'
                                        className='text-green hover:underline'
                                    >
                                        Log In
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
