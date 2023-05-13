import React from "react";
import {
    MdMarkEmailUnread,
    MdOutlineFacebook,
    MdOutlinePhoneAndroid,
    MdShareLocation,
} from "react-icons/md";
import {
    RiInstagramLine,
    RiLinkedinBoxFill,
    RiTwitterFill,
} from "react-icons/ri";
import whiteLogo from "../../assets/logo/White Logo.svg";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className='bg-darkBlack'>
            <div className='container mx-auto max-w-[1180px] !px-6 flex flex-col lg:flex-row justify-between text-white py-16 space-y-9 lg:space-y-0'>
                <div className='space-y-4 w-full lg:w-1/2'>
                    <Link href='/'>
                        <Image src={whiteLogo} className='w-24' alt='' />
                    </Link>
                    <p>
                        We earned a reputation of being good at what we do. Let
                        us take your online shop to new dimension in success!
                    </p>
                    <div className='flex items-center'>
                        <MdShareLocation className='mr-2 text-2xl' />
                        <p>Mirpur-2, Dhaka, Bangladesh</p>
                    </div>
                    <div className='flex items-center'>
                        <MdMarkEmailUnread className='mr-2 text-2xl' />
                        <Link className='mailto' href='/'>
                            touristguide@gmail.com
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <MdOutlinePhoneAndroid className='mr-2 text-2xl' />
                        <Link href='/' className='hover:text-white'>
                            +8801865 748726
                        </Link>
                    </div>
                    <div className='flex space-x-3'>
                        <Link
                            href='/'
                            className='text-2xl transition-all hover:text-green'
                        >
                            <MdOutlineFacebook />
                        </Link>
                        <Link
                            href='/'
                            className='text-2xl transition-all hover:text-green'
                        >
                            <RiInstagramLine />
                        </Link>
                        <Link
                            href='/'
                            className='text-2xl transition-all hover:text-green'
                        >
                            <RiTwitterFill />
                        </Link>
                        <Link
                            href='/'
                            className='text-2xl transition-all hover:text-green'
                        >
                            <RiLinkedinBoxFill />
                        </Link>
                    </div>
                </div>
                <div className='touristGuide '>
                    <h2 className='font-semibold text-2xl mb-6'>
                        Tourist Guide
                    </h2>
                    <div className='flex flex-col space-y-4'>
                        <Link
                            href='/faq'
                            className='hover:underline hover:text-white'
                        >
                            FAQ
                        </Link>
                        <Link
                            href='/terms'
                            className='hover:underline hover:text-white'
                        >
                            Terms and Conditions
                        </Link>
                        <Link
                            href='/howToUse'
                            className='hover:underline hover:text-white'
                        >
                            How to Use
                        </Link>
                    </div>
                </div>
                <div className='touristGuide '>
                    <h2 className='font-semibold text-2xl mb-6'>About</h2>
                    <div className='flex flex-col space-y-4'>
                        <Link
                            href='/shareHistory'
                            className='hover:underline hover:text-white'
                        >
                            Share History
                        </Link>
                        <Link
                            href='/profile'
                            className='hover:underline hover:text-white'
                        >
                            Profile
                        </Link>
                        <Link
                            href='/contact'
                            className='hover:underline hover:text-white'
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className='touristGuide  '>
                    <h2 className='font-semibold text-2xl mb-6'>
                        Tourist Guide
                    </h2>
                    <div className='flex flex-col space-y-4'>
                        <Link
                            href='/about'
                            className='hover:underline hover:text-white'
                        >
                            About Us
                        </Link>
                        <Link
                            href='/gallery'
                            className='hover:underline hover:text-white'
                        >
                            Gallery
                        </Link>
                        <Link
                            href='/home'
                            className='hover:underline hover:text-white'
                        >
                            Home
                        </Link>
                        <Link
                            href='/createEvent'
                            className='hover:underline hover:text-white'
                        >
                            Create Event
                        </Link>
                        <Link
                            href='/contact'
                            className='hover:underline hover:text-white'
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
