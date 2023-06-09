import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaBlog } from "react-icons/fa";
import { SiEventstore } from "react-icons/si";
import { BiLogOut } from "react-icons/bi";
import Image from "../../image/Image";
import { ReactComponent as AccountIcon } from "../../../assets/svg/account.svg";
import { Link } from "react-router-dom";
import { userLoggedOut } from "../../../redux/slice/authentication/authSlice";
import { useDispatch } from "react-redux";
const NavProfileInfo = ({ user }) => {
    const dispatch = useDispatch();
    const logOut = () => {
        dispatch(userLoggedOut());
    };
    return (
        <div className=' items-center gap-2 cursor-pointer hidden lg:flex has-submenu'>
            <span className='w-[40px] rounded-full overflow-hidden'>
                <Image
                    src={user?.image}
                    className={{
                        objectFit: "cover",
                        objectCover: "center",
                    }}
                />
            </span>
            <p className='font-normal text-[#0e0e0e]'>{user?.name}</p>
            <IoIosArrowDown />
            <div className='submenu-nav !mt-5 w-72 rounded-md !p-0'>
                <div className='bg-green w-full rounded-t-md h-20 flex p-4 items-center gap-2'>
                    <span className='w-[50px] rounded-full overflow-hidden'>
                        <Image
                            src={user?.image}
                            className={{
                                objectFit: "cover",
                                objectCover: "center",
                            }}
                        />
                    </span>
                    <div>
                        <p className='text-sm font-normal'>{user?.name}</p>
                        <p className='text-[12px] '>{user?.email}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 px-4 pt-4'>
                    <Link
                        className='!text-black !ml-0 flex gap-5 items-center text-sm text-medium hover:!bg-transparent'
                        to='/profile'
                    >
                        <AccountIcon />
                        <span>View Profile</span>
                    </Link>
                    <Link
                        className='!text-black !ml-0 flex gap-5 items-center hover:!bg-transparent'
                        to='/blog'
                    >
                        <FaBlog className='text-black' />
                        <span>View Blog</span>
                    </Link>
                    <Link
                        className='!text-black !ml-0 flex gap-5 items-center hover:!bg-transparent'
                        to='/event'
                    >
                        <SiEventstore className='text-black' />
                        <span>View Event</span>
                    </Link>
                </div>
                <hr className='my-5 border-mediumGray w-ful h-px' />
                <button
                    className='!text-black !ml-0 flex gap-5 px-4 pb-4 hover:!bg-transparent'
                    onClick={() => logOut()}
                >
                    <BiLogOut className='text-black' />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
};

export default NavProfileInfo;
