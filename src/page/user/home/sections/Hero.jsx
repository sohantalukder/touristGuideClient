import React from "react";
import { districts } from "./districtsElement";
import { MdLocationPin } from "react-icons/md";
import { SiGumroad } from "react-icons/si";
import backgroundImage from "../../../../assets/images/hero-image.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import District from "./District";
const Hero = () => {
    const [isActive, setActive] = useState(true);
    const toggleClass = () => {
        setActive(!isActive);
    };
    return (
        <div
            className='pt-16'
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
            }}
        >
            {/* Flex Container */}
            <div className='container max-w-[1180px] mx-auto  py-20 '>
                <div className=''>
                    <h2 className='text-base md:text-lg font-semibold text-white mb-4'>
                        We are always here to guide you.
                    </h2>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8'>
                        Enjoy your Travel & Discover new Bangladesh!
                    </h1>
                    <div>
                        <div className='flex'>
                            <button
                                onClick={toggleClass}
                                className='md:px-10 px-6 py-3 hover:bg-white focus:bg-white text-white hover:!text-green focus:!text-green  bg-mediumGray transition-all flex '
                            >
                                <MdLocationPin className='text-lg mr-1' />{" "}
                                <span>Place</span>
                            </button>
                            <button
                                onClick={toggleClass}
                                className='md:px-10 px-6 py-3 hover:bg-white focus:bg-white  text-white hover:!text-green focus:!text-green  bg-mediumGray transition-all flex '
                            >
                                <SiGumroad className='text-lg mr-1' />{" "}
                                Destination
                            </button>
                        </div>
                        <div>
                            {isActive ? (
                                <div>
                                    <div className='bg-white py-8  px-6 w-full'>
                                        <form
                                            action=''
                                            className='flex justify-between   space-y-4 md:space-y-0'
                                        >
                                            <input
                                                type='text'
                                                placeholder='Where you want to go?'
                                                className='w-10/12 border-b border-nav focus:border-green focus:outline-none px-3 py-1 '
                                            />
                                            <button
                                                type='submit'
                                                className='border max-w-3/4 border-nav hover:border-green text-gray hover:text-green focus:text-green focus:border-green px-4 py-2 float-right'
                                            >
                                                Search
                                            </button>
                                        </form>
                                    </div>
                                    <p className='my-4 text-white'>
                                        Popular Categories:{" "}
                                        <span>
                                            <Link
                                                to='/tangail'
                                                className='hover:underline mr-1'
                                            >
                                                #tangail,
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                to='/dhaka'
                                                className='hover:underline mr-1'
                                            >
                                                #dhaka,
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                to='/coxsBazar'
                                                className='hover:underline mr-1'
                                            >
                                                #cox's bazar,
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                to='/sylhet'
                                                className='hover:underline mr-1'
                                            >
                                                #sylhet,
                                            </Link>
                                        </span>
                                        <span>
                                            <Link
                                                to='/satkhira'
                                                className='hover:underline mr-1'
                                            >
                                                #satkhira,
                                            </Link>
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <div className='bg-white py-8  px-6 w-full'>
                                    <div className='grid lg:grid-cols-7 grid-cols-2 md:grid-cols-4 gap-x-7 '>
                                        {districts.map((district) => (
                                            <District
                                                district={district}
                                            ></District>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
