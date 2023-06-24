import React from "react";

const ChangePassword = () => {
    return (
        <div>
            <div className='container mx-auto max-w-[1180px] px-4 lg:px-6 py-8  relative'>
                <div>
                    <h1 className='text-2xl md:text-2xl font-medium'>
                        Change Your Password
                    </h1>
                    <p className='my-1 text-gray'>
                        Update you password providing old password
                    </p>
                </div>
                <form action='' className='mt-8'>
                    <ul className='  space-y-5'>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='name '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Old Password
                            </label>
                            <input
                                type='text'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='Old Password'
                                required
                                id='name'
                            />
                        </li>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='email '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                New Password
                            </label>
                            <input
                                type='email'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='New Password'
                                required
                                id='email'
                            />
                        </li>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='email '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Confirm Password
                            </label>

                            <input
                                type='text'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='Confirm Password'
                                required
                                id='location'
                                name='location'
                            />
                        </li>

                        <li>
                            <button
                                type='submit'
                                className='bg-green text-white transition-all rounded-sm hover:bg-black px-8  py-3'
                            >
                                Change Password
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
