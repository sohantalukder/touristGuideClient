import { useEffect, useState } from "react";
import { BiHide, BiShowAlt } from "react-icons/bi";
import loginImage from "../../assets/svg/sign-in-illustration.svg";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas";
import { useSelector } from "react-redux";
import GoogleLogin from "../../utils/googleLogin/GoogleLogin";
import Spinner from "../../components/spinner/Spinner";
import Image from "../../components/image/Image";
import CustomInput from "../../components/customInput/CustomInput";
import { useLoginMutation } from "../../redux/slice/authentication/authApi";
import { Link } from "react-router-dom";
import SEO from "../../utils/seo/SEO";
const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const [login, { isLoading, error: isError }] = useLoginMutation();
    const { user } = useSelector((state) => state.auth) || {};
    const { values, handleChange, handleSubmit, handleBlur, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: loginSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: async (values, action) => {
                const { email, password } = values;
                const result = await login({
                    email,
                    password,
                });
                const { status } = result?.data?.response || {};
                if (status?.code === 200) {
                    toast.success("Successfully logged in");
                    // router.push("/");
                    action.resetForm();
                }
                return;
            },
        });
    useEffect(() => {
        isError && toast.error(isError.data?.response?.status?.message);
    }, [isError]);
    useEffect(() => {
        // user?.token && router.push("/");
    }, [user]);
    return (
        <div>
            <SEO
                title='Login'
                description='Discover and explore your dream destinations with our tourist guide website. Immerse yourself in local culture, uncover hidden gems, and visit iconic landmarks. Enhance your travel experience by hiring experienced guides through our platform. Create unforgettable memories with us as your trusted companion on your next adventure.'
                name='Tourist Guide'
                type='travel, tour, tourist, guide'
            />
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
                                priority={false}
                                alt='loginSVG'
                            />
                        </div>
                    </div>
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
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    isError={
                                                        errors.email &&
                                                        touched.email
                                                    }
                                                    error={
                                                        touched.email &&
                                                        errors.email
                                                    }
                                                />
                                            </li>
                                            <li className='flex flex-col items-start relative'>
                                                <CustomInput
                                                    label='Password'
                                                    type='password'
                                                    placeholder='Password'
                                                    name={"password"}
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
                                                to='/forgetPassword'
                                                className='text-green  w-full lg:w-[473px] lg:px-0  hover:underline '
                                            >
                                                Forget Password
                                            </Link>
                                        </div>
                                    </div>
                                    <button
                                        type='submit'
                                        disabled={isLoading}
                                        className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:w-[473px] h-[50px]'
                                    >
                                        <div className='flex justify-center items-center'>
                                            {isLoading ? <Spinner /> : "Log In"}
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
                                <GoogleLogin />
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
