import { useSignal } from "@preact/signals-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../../utils/seo/SEO";
import CustomInput from "../../components/customInput/CustomInput";
import { BiHide, BiShowAlt } from "react-icons/bi";
import Spinner from "../../components/spinner/Spinner";
const AdminLogin: React.FC = () => {
    const navigate = useNavigate();
    const passwordShown = useSignal(false);
    const togglePassword = () => {
        const value = passwordShown.value;
        passwordShown.value = !value;
    };
    const handleSubmit = () => {};
    return (
        <>
            <SEO title=' Admin Login' />
            <div className='container mx-auto max-w-[1180px] px-4 lg:px-0 py-16'>
                <div className='flex flex-col lg:flex-row items-center justify-center'>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col  text-left lg:text-center w-full '>
                            <div className='space-y-5'>
                                <h1 className='text-2xl text-green font-bold'>
                                    Log In
                                </h1>
                                <form
                                    onSubmit={handleSubmit}
                                    className=' space-y-5'
                                >
                                    <div className='space-y-5'>
                                        <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                            <li className='flex flex-col items-start relative'>
                                                <CustomInput
                                                    label='Email'
                                                    placeholder='Email'
                                                    name={"email"}
                                                    //     value={values.email}
                                                    //     onChange={handleChange}
                                                    //     onBlur={handleBlur}
                                                    //     isError={
                                                    //         errors.email &&
                                                    //         touched.email
                                                    //     }
                                                    //     error={
                                                    //         touched.email &&
                                                    //         errors.email
                                                    //     }
                                                />
                                            </li>
                                            <li className='flex flex-col items-start relative'>
                                                <CustomInput
                                                    label='Password'
                                                    type='password'
                                                    placeholder='Password'
                                                    name={"password"}
                                                    //     value={values.password}
                                                    //     onChange={handleChange}
                                                    //     onBlur={handleBlur}
                                                    //     isError={
                                                    //         errors.password &&
                                                    //         touched.password
                                                    //     }
                                                    //     error={
                                                    //         touched.password &&
                                                    //         errors.password
                                                    //     }
                                                    passwordShown={
                                                        passwordShown.value
                                                    }
                                                    leftIcon={
                                                        !passwordShown.value ? (
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
                                                to='/forgetPassword'
                                                className='text-green  w-full lg:w-[473px] lg:px-0  hover:underline '
                                            >
                                                Forget Password
                                            </Link>
                                        </div>
                                    </div>
                                    <button
                                        type='submit'
                                        // disabled={isLoading}
                                        className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:w-[473px] h-[50px]'
                                    >
                                        {/* <div className='flex justify-center items-center'>
                                            {isLoading ? <Spinner /> : "Log In"}
                                        </div> */}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminLogin;
