"use client";
import React, { useEffect, useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../../assets/sign-in-illustration.svg";
import Image from "next/image";
import Link from "next/link";
import CustomInput from "../../components/CustomInput/CustomInput";
import { mutation } from "../../utilities/apiRequest/apiRequest";
import { BASE_API_URL } from "../../../../config";
import { toast } from "react-hot-toast";
import Spinner from "../../utilities/spinner/Spinner";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { registerSchema } from "../../schemas";
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [cPasswordShown, setCPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false);

    const { push } = useRouter();
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const toggleCPassword = () => {
        setCPasswordShown(!cPasswordShown);
    };
    const { user } = useSelector((state) => state.auth) || {};
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: registerSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: async (values, action) => {
                const { name, email, password } = values;
                setLoading(true);
                const URL = `${BASE_API_URL}/auth/register`;
                const obj = { email, password, name };
                const result = await mutation(URL, "POST", obj);
                if (result) {
                    setLoading(false);
                    const { status, records } = result?.response;
                    if (status?.code === 201) {
                        toast.loading(status?.message);
                        push("/otpVerification", {
                            data: records,
                        });
                        action?.resetForm();
                    } else {
                        toast.error(status?.message);
                    }
                }
            },
        });
    useEffect(() => {
        user?.token && router.push("/");
    }, [user]);
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
                            <form onSubmit={handleSubmit}>
                                <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                    <li className='flex flex-col items-start'>
                                        <CustomInput
                                            label='Name'
                                            required
                                            placeholder='Name'
                                            name={"name"}
                                            value={values.name}
                                            maxLength='32'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isError={
                                                errors.name && touched.name
                                            }
                                            error={touched.name && errors.name}
                                        />
                                    </li>
                                    <li className='flex flex-col items-start'>
                                        <CustomInput
                                            label='Email'
                                            required
                                            placeholder='Email'
                                            name={"email"}
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isError={
                                                errors.email && touched.email
                                            }
                                            error={
                                                touched.email && errors.email
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
                                            minLength='6'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isError={
                                                errors.password &&
                                                touched.password
                                            }
                                            error={
                                                touched.password &&
                                                errors.password
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
                                            minLength='6'
                                            name={"confirm_password"}
                                            value={values.confirm_password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            isError={
                                                errors.confirm_password &&
                                                touched.confirm_password
                                            }
                                            error={
                                                touched.confirm_password &&
                                                errors.confirm_password
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
