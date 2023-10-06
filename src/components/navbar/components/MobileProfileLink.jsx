import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { routes } from "../../../route/routeName";
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
                            <Link to={routes.profile} className='flex mt-2.5'>
                                View Profile
                            </Link>
                            <Link
                                to={routes.profileBlog}
                                className='flex mt-2.5'
                            >
                                View Blog
                            </Link>
                            <Link
                                to={routes.profileEvent}
                                className='flex mt-2.5'
                            >
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
                    to={routes.login}
                >
                    Login
                </Link>
            )}
        </li>
    );
};

export default MobileProfileLink;
