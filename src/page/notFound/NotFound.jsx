import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <div className='flex flex-row items-center  space-x-5 container mx-auto !px-6 justify-center max-w-[1180px] h-screen'>
                <div className='flex flex-row items-start  space-x-5 '>
                    <div>
                        <h1 className='text-6xl lg:text-7xl hidden md:block font-bold text-black'>
                            404
                        </h1>
                    </div>
                    <div>
                        <div className='flex space-x-0 md:space-x-5 items-start justify-center h-full'>
                            <hr className='h-20 w-px bg-mediumGray hidden md:block' />
                            <div>
                                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black'>
                                    Page Not Found !
                                </h1>
                                <p className='text-base md:text-lg text-gray mt-2'>
                                    Please check the URL in the address bar and
                                    try again.
                                </p>
                            </div>
                        </div>
                        <div className='space-x-0 md:space-x-5  mt-6 ml-0 md:ml-5 flex'>
                            <Link
                                to='/'
                                className='px-6 py-3 rounded-lg bg-green text-white'
                            >
                                Go Back Home
                            </Link>
                            <Link
                                to='/contact'
                                className='px-6 py-3 rounded-lg bg-greenLight text-white hidden md:flex'
                            >
                                Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
