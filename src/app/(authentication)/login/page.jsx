"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../../assets/sign-in-illustration.svg";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
    //     const location = useRouter();

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const onSubmit = (data) => {
        reset();
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
                                    onSubmit={handleSubmit(onSubmit)}
                                    className=' space-y-5'
                                >
                                    <div className='space-y-5'>
                                        <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                            <li className='flex flex-col items-start'>
                                                <label
                                                    htmlFor='email '
                                                    className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                                >
                                                    Email
                                                </label>
                                                <input
                                                    type='email'
                                                    className={
                                                        errors.user_email
                                                            ? "control-form  !border-red focus:!border-red"
                                                            : "control-form !border-mediumGray focus:!border-green"
                                                    }
                                                    placeholder='Email'
                                                    name='user_email'
                                                    {...register("user_email", {
                                                        required:
                                                            "Email is Required.",
                                                        pattern: {
                                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                            message:
                                                                "Email must be valid",
                                                        },
                                                    })}
                                                    id='email'
                                                />
                                                <p className='text-red pt-1 text-left text-sm'>
                                                    {errors.user_email?.message}
                                                </p>
                                            </li>
                                            <li className='flex flex-col items-start relative'>
                                                <label
                                                    htmlFor='Password '
                                                    className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type={
                                                        passwordShown
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder='Password'
                                                    id='Password'
                                                    className={
                                                        errors.user_password
                                                            ? "control-form  !border-red focus:!border-red"
                                                            : "control-form !border-mediumGray focus:!border-green"
                                                    }
                                                    {...register(
                                                        "user_password",
                                                        {
                                                            required:
                                                                "Password is Required...",
                                                            pattern: {
                                                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                                                message:
                                                                    "Password Must Contain At least 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
                                                            },
                                                            maxLength: {
                                                                value: 15,
                                                                message:
                                                                    "Password must be at most 15 characters long...",
                                                            },
                                                        }
                                                    )}
                                                    name='user_password'
                                                />
                                                {!passwordShown ? (
                                                    <BiHide
                                                        className='absolute top-[43px] right-4 text-xl cursor-pointer'
                                                        onClick={togglePassword}
                                                    />
                                                ) : (
                                                    <BiShowAlt
                                                        className='absolute top-[43px] right-4 text-xl cursor-pointer'
                                                        onClick={togglePassword}
                                                    />
                                                )}
                                                <p className='text-red pt-1 text-left text-sm'>
                                                    {
                                                        errors.user_password
                                                            ?.message
                                                    }
                                                </p>
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
                                        className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:w-[473px] lg:px-0 py-3'
                                    >
                                        Log In
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
