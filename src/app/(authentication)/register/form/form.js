"use client";
import React, { useState } from "react";
import CustomInput from "../../../components/CustomInput/CustomInput";
import { BiHide, BiShowAlt } from "react-icons/bi";
import Spinner from "../../../utilities/spinner/Spinner";
import { useFormik } from "formik";
import { registerSchema } from "../../../schemas";
import { mutation } from "../../../utilities/apiRequest/apiRequest";
import { BASE_API_URL } from "../../../../../config";
import { toast } from "react-hot-toast";
const Form = ({}) => {
    const [loading, setLoading] = useState(false);
    const initialValues = {
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    };
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
    const [passwordShown, setPasswordShown] = useState(false);
    const [cPasswordShown, setCPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const toggleCPassword = () => {
        setCPasswordShown(!cPasswordShown);
    };
    return (
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
                        isError={errors.name && touched.name}
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
                        isError={errors.email && touched.email}
                        error={touched.email && errors.email}
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
                        isError={errors.password && touched.password}
                        error={touched.password && errors.password}
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
                            errors.confirm_password && touched.confirm_password
                        }
                        error={
                            touched.confirm_password && errors.confirm_password
                        }
                        passwordShown={cPasswordShown}
                        leftIcon={
                            !cPasswordShown ? (
                                <BiHide
                                    className='absolute top-[43px] right-4 text-xl cursor-pointer transition-all'
                                    onClick={toggleCPassword}
                                />
                            ) : (
                                <BiShowAlt
                                    className='absolute top-[43px] right-4 text-xl cursor-pointer transition-all'
                                    onClick={toggleCPassword}
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
                            {loading ? <Spinner /> : "Register"}
                        </div>
                    </button>
                </li>
            </ul>
        </form>
    );
};

export default Form;
