import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
import { Link } from "react-router-dom";
const MobileProfileLink = ({ showLinks, handleShowLink, logOut, user }) => {
    return (
        <li className=' flex justify-between items-center'>
            {user?.email ? (
                <div className='w-full'>
                    <button
                        onClick={() => handleShowLink("profile")}
                        className='flex justify-between w-full items-center'
                    >
                        <span>Profile</span>
                        {showLinks === "profile" ? (
                            <VscChromeMinimize />
                        ) : (
                            <AiOutlinePlus />
                        )}
                    </button>{" "}
                    {showLinks === "profile" && (
                        <div className='w-full'>
                            <Link to='/profile' className='flex mt-2.5'>
                                View Profile
                            </Link>
                            <Link to='/profile/event' className='flex mt-2.5'>
                                View Blog
                            </Link>
                            <Link to='/profile/event' className='flex mt-2.5'>
                                View Event
                            </Link>
                            <button
                                onClick={() => logOut()}
                                className=' mt-2.5 bg-black w-full px-5 py-2 text-center text-white font-medium'
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <Link
                    className='bg-green w-full px-5 py-2 text-center text-white font-medium'
                    to='/login'
                >
                    Login
                </Link>
            )}
        </li>
    );
};

export default MobileProfileLink;
