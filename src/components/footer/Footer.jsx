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
import { Link } from "react-router-dom";
import Image from "../image/Image";
import { useSelector } from "react-redux";

const Footer = () => {
    const { preference } = useSelector((state) => state.preference) || {};
    const {
        logos,
        website_description,
        primaryContactNumber,
        primaryEmail,
        twitterURL,
        address,
        instagramURL,
        linkedinURL,
        facebookURL,
        website_name,
    } = preference || {};
    return (
        <div className='bg-darkBlack'>
            <div className='container mx-auto max-w-[1180px] !px-6 flex flex-col lg:flex-row justify-between text-white py-16 space-y-9 lg:space-y-0'>
                <div className=' w-full lg:w-1/2'>
                    <Link to='/'>
                        <span className='!w-40 flex'>
                            <Image src={logos?.whiteLogo} alt='' />
                        </span>
                    </Link>
                    <div className='space-y-4'>
                        <p>{website_description}</p>
                        <div className='flex items-center'>
                            <MdShareLocation className='mr-2 text-2xl' />
                            <p>{address}</p>
                        </div>
                        <div className='flex items-center'>
                            <MdMarkEmailUnread className='mr-2 text-2xl' />
                            <Link className='mailto' to='/'>
                                {primaryEmail}
                            </Link>
                        </div>
                        <div className='flex items-center'>
                            <MdOutlinePhoneAndroid className='mr-2 text-2xl' />
                            <Link to='/' className='hover:text-white'>
                                {primaryContactNumber}
                            </Link>
                        </div>
                        <div className='flex space-x-3'>
                            {facebookURL && (
                                <Link
                                    to={facebookURL}
                                    target='_blank'
                                    className='text-2xl transition-all hover:text-green'
                                >
                                    <MdOutlineFacebook />
                                </Link>
                            )}
                            {instagramURL && (
                                <Link
                                    to={instagramURL}
                                    target='_blank'
                                    className='text-2xl transition-all hover:text-green'
                                >
                                    <RiInstagramLine />
                                </Link>
                            )}
                            {twitterURL && (
                                <Link
                                    to={twitterURL}
                                    target='_blank'
                                    className='text-2xl transition-all hover:text-green'
                                >
                                    <RiTwitterFill />
                                </Link>
                            )}
                            {linkedinURL && (
                                <Link
                                    to={linkedinURL}
                                    target='_blank'
                                    className='text-2xl transition-all hover:text-green'
                                >
                                    <RiLinkedinBoxFill />
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
                <div className='touristGuide '>
                    <h2 className='font-semibold text-2xl mb-6'>
                        {website_name}
                    </h2>
                    <div className='flex flex-col space-y-4'>
                        <Link
                            to='/faq'
                            className='hover:underline hover:text-white'
                        >
                            FAQ
                        </Link>
                        <Link
                            to='/terms'
                            className='hover:underline hover:text-white'
                        >
                            Terms and Conditions
                        </Link>
                        <Link
                            to='/howToUse'
                            className='hover:underline hover:text-white'
                        >
                            How to Use
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
