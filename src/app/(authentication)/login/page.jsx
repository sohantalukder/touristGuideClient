"use client";
import { useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../assets/sign-in-illustration.svg";
import Link from "next/link";
import Image from "next/image";
import CustomInput from "@/components/CustomInput/CustomInput";
import { handleSetInfo } from "@/utilities/handleFromData/handleFromData";
import Spinner from "@/utilities/spinner/spinner";
const initialState = {
    email: "",
    password: "",
};
const initialError = {
    email: false,
    password: false,
};
const Login = () => {
    //     const location = useRouter();
    const [fromData, setFromData] = useState(initialState);
    const [error, setError] = useState(initialError);
    const [emailError, setEmailError] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const handleError = () => {
        const { email, password } = fromData;
        const errorEmail = email === "" ? true : false;
        const errorPassword = password === "" ? true : false;
        setError({
            ...error,
            email: errorEmail,
            password: errorPassword,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = fromData;
        if (email && password && !loading) {
            setLoading(true);
            return;
        }
        handleError();
    };
    return (
        <div>
            <div className='container mx-auto max-w-[1180px] px-4 lg:px-0 py-16'>
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <div className='w-full lg:w-[537px] hidden lg:block'>
                        <div className='flex flex-col justify-center text-center'>
                            <h1 className='text-4xl text-black font-bold mb-4'>
                                Welcome To Tourist
                                <span className='text-green'>Guide</span>
                            </h1>
                            <p className='mb-12'>
                                Our goal is to get to the place of your choice
                                very easily and let you enjoy the natural beauty
                                of Bangladesh.
                            </p>
                            <Image
                                src={loginImage}
                                className='w-auto h-auto'
                                priority={false}
                                alt='loginSVG'
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col  text-left lg:text-center w-full '>
                            <div className='space-y-5'>
                                <h1 className='text-2xl text-green font-bold'>
                                    Sign In
                                </h1>
                                <form
                                    onSubmit={onSubmit}
                                    className=' space-y-5'
                                >
                                    <div className='space-y-5'>
                                        <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                            <li className='flex flex-col items-start relative'>
                                                <CustomInput
                                                    label='Email'
                                                    required
                                                    placeholder='Email'
                                                    name={"name"}
                                                    value={fromData.email}
                                                    onChange={(text) =>
                                                        handleSetInfo(
                                                            "email",
                                                            text,
                                                            setFromData,
                                                            fromData,
                                                            setError,
                                                            error,
                                                            setEmailError
                                                        )
                                                    }
                                                    isError={
                                                        (emailError &&
                                                            fromData.email) ||
                                                        (error.email &&
                                                            !fromData.email)
                                                    }
                                                    error={
                                                        (emailError &&
                                                            fromData.email &&
                                                            "Your email is not valid.") ||
                                                        (error.email &&
                                                            !fromData.email &&
                                                            "This field is required.")
                                                    }
                                                />
                                            </li>
                                            <li className='flex flex-col items-start relative'>
                                                <CustomInput
                                                    label='Password'
                                                    required
                                                    type='password'
                                                    placeholder='Password'
                                                    name={"password"}
                                                    value={fromData.password}
                                                    onChange={(text) =>
                                                        handleSetInfo(
                                                            "password",
                                                            text,
                                                            setFromData,
                                                            fromData,
                                                            setError,
                                                            error
                                                        )
                                                    }
                                                    isError={
                                                        error.password &&
                                                        !fromData.password
                                                    }
                                                    error={
                                                        error.password &&
                                                        !fromData.password &&
                                                        "This field is required!"
                                                    }
                                                    passwordShown={
                                                        passwordShown
                                                    }
                                                    leftIcon={
                                                        !passwordShown ? (
                                                            <BiHide
                                                                className='absolute top-[43px] right-4 text-xl cursor-pointer'
                                                                onClick={
                                                                    togglePassword
                                                                }
                                                            />
                                                        ) : (
                                                            <BiShowAlt
                                                                className='absolute top-[43px] right-4 text-xl cursor-pointer'
                                                                onClick={
                                                                    togglePassword
                                                                }
                                                            />
                                                        )
                                                    }
                                                />
                                            </li>
                                        </ul>
                                        <div className='text-left w-full lg:w-[473px] lg:px-0 mx-auto'>
                                            <Link
                                                href='/forgetPassword'
                                                className='text-green  w-full lg:w-[473px] lg:px-0  hover:underline '
                                            >
                                                Forget Password
                                            </Link>
                                        </div>
                                    </div>
                                    <button
                                        type='submit'
                                        disabled={loading}
                                        className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:w-[473px] h-[50px]'
                                    >
                                        <div className='flex justify-center items-center'>
                                            {!loading ? <Spinner /> : "Log In"}
                                        </div>
                                    </button>
                                </form>

                                <div className='flex space-x-2 lg:space-x-10  justify-between items-center text-center px-6 w-full lg:w-[473px] lg:px-0 mx-auto'>
                                    <div className='w-1/4 lg:w-1/3 border border-mediumGray'></div>

                                    <p className='w-1/2  lg:w-1/3 text-center'>
                                        Or Log In With
                                    </p>
                                    <div className=' w-1/4 lg:w-1/3 border border-mediumGray'></div>
                                </div>
                                <div className='flex justify-center items-center'>
                                    <button className='border border-mediumGray py-3 px-6 w-full lg:w-[473px] lg:px-0 flex justify-center items-center'>
                                        <FcGoogle className='mr-2 text-2xl' />
                                        Sign up with Google
                                    </button>
                                </div>
                                <div>
                                    <p>
                                        Don't have account?{" "}
                                        <Link
                                            href='/register'
                                            className='text-green hover:underline'
                                        >
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
