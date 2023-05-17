"use client";
import React, { useEffect, useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/sign-in-illustration.svg";
import Image from "next/image";
import Link from "next/link";
import { handleSetInfo } from "../../utilities/handleFromData/handleFromData";
import CustomInput from "../../components/CustomInput/CustomInput";
import { mutation } from "../../utilities/apiRequest/apiRequest";
import { BASE_API_URL } from "../../../../config";
import { toast } from "react-hot-toast";
import Spinner from "../../utilities/spinner/Spinner";
import { useRouter } from "next/navigation";
const initialState = {
    name: "",
    email: "",
    password: "",
    cPassword: "",
};
const initialError = {
    name: false,
    email: false,
    password: false,
    cPassword: false,
};
const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [cPasswordShown, setCPasswordShown] = useState(false);
    const [fromData, setFromData] = useState(initialState);
    const [error, setError] = useState(initialError);
    const [emailError, setEmailError] = useState(false);
    const [matchPassword, setMatchPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleError = () => {
        const { email, password, name, cPassword } = fromData;
        const errorEmail = email === "" ? true : false;
        const errorName = name === "" ? true : false;
        const errorPassword = password === "" ? true : false;
        const errorCPassword = cPassword === "" ? true : false;
        setError({
            ...error,
            name: errorName,
            email: errorEmail,
            password: errorPassword,
            cPassword: errorCPassword,
        });
    };
    const { push } = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const { email, password, name, cPassword } = fromData;
        if (email && password && name && cPassword && !loading) {
            if (cPassword !== password) {
                setMatchPassword(true);
                return;
            }
            setLoading(true);
            setMatchPassword(false);
            const URL = `${BASE_API_URL}/auth/register`;
            const obj = { email, password, name };
            const result = await mutation(URL, "POST", obj);
            if (result) {
                setFromData(initialState);
                setLoading(false);
                const { status, records } = result?.response;
                if (status?.code === 202) {
                    toast.loading(status?.message);
                    push("/otpVerification", {
                        data: records,
                    });
                } else {
                    toast.error(status?.message);
                }
            }
        }
        handleError();
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const toggleCPassword = () => {
        setCPasswordShown(!cPasswordShown);
    };
    useEffect(() => {
        fromData.password === fromData.cPassword && setMatchPassword(false);
    }, [fromData.password, fromData.cPassword]);
    const handleGoogleSignIn = () => {};

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
                            <form onSubmit={onSubmit}>
                                <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                    <li className='flex flex-col items-start'>
                                        <CustomInput
                                            label='Name'
                                            required
                                            placeholder='Name'
                                            name={"name"}
                                            value={fromData.name}
                                            maxLength='32'
                                            onChange={(text) =>
                                                handleSetInfo(
                                                    "name",
                                                    text,
                                                    setFromData,
                                                    fromData,
                                                    setError,
                                                    error
                                                )
                                            }
                                            isError={
                                                error.name && !fromData.name
                                            }
                                            error={
                                                error.name &&
                                                !fromData.name &&
                                                "This field is required."
                                            }
                                        />
                                    </li>
                                    <li className='flex flex-col items-start'>
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
                                                (error.email && !fromData.email)
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
                                            minLength='8'
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
                                                matchPassword ||
                                                (error.password &&
                                                    !fromData.password)
                                            }
                                            error={
                                                error.password &&
                                                !fromData.password &&
                                                "This field is required!"
                                            }
                                            passwordShown={passwordShown}
                                            leftIcon={
                                                !passwordShown ? (
                                                    <BiHide
                                                        className='absolute top-[43px] right-4 text-xl cursor-pointer'
                                                        onClick={togglePassword}
                                                    />
                                                ) : (
                                                    <BiShowAlt
                                                        className='absolute top-[43px] right-4 text-xl cursor-pointer'
                                                        onClick={togglePassword}
                                                    />
                                                )
                                            }
                                        />
                                    </li>
                                    <li className='flex flex-col items-start relative'>
                                        <CustomInput
                                            label='Password'
                                            required
                                            type='password'
                                            placeholder='Password'
                                            minLength='8'
                                            name={"password"}
                                            value={fromData.cPassword}
                                            onChange={(text) =>
                                                handleSetInfo(
                                                    "cPassword",
                                                    text,
                                                    setFromData,
                                                    fromData,
                                                    setError,
                                                    error
                                                )
                                            }
                                            isError={
                                                matchPassword ||
                                                (error.password &&
                                                    !fromData.password)
                                            }
                                            error={
                                                (matchPassword &&
                                                    "Password did not match.") ||
                                                (error.cPassword &&
                                                    !fromData.cPassword &&
                                                    "This field is required!")
                                            }
                                            passwordShown={cPasswordShown}
                                            leftIcon={
                                                !cPasswordShown ? (
                                                    <BiHide
                                                        className='absolute top-[43px] right-4 text-xl cursor-pointer transition-all'
                                                        onClick={
                                                            toggleCPassword
                                                        }
                                                    />
                                                ) : (
                                                    <BiShowAlt
                                                        className='absolute top-[43px] right-4 text-xl cursor-pointer transition-all'
                                                        onClick={
                                                            toggleCPassword
                                                        }
                                                    />
                                                )
                                            }
                                        />
                                    </li>
                                    <li>
                                        <button
                                            type='submit'
                                            disabled={loading}
                                            className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:w-[473px] lg:px-0 py-3'
                                        >
                                            <div className='flex justify-center items-center'>
                                                {loading ? (
                                                    <Spinner />
                                                ) : (
                                                    "Register"
                                                )}
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </form>
                            <div className='flex space-x-2 lg:space-x-10  justify-between items-center text-center px-6 w-full lg:w-[473px] lg:px-0 mx-auto'>
                                <div className='w-1/4 lg:w-1/3 border border-mediumGray'></div>

                                <p className='w-1/2  lg:w-1/3 text-center'>
                                    Or Register With
                                </p>
                                <div className=' w-1/4 lg:w-1/3 border border-mediumGray'></div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <button
                                    onClick={handleGoogleSignIn}
                                    className='border border-mediumGray py-3 px-6 w-full lg:w-[473px] lg:px-0 flex justify-center items-center'
                                >
                                    <FcGoogle className='mr-2 text-2xl' />
                                    Sign up with Google
                                </button>
                            </div>
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
