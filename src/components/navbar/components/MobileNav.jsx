import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeMinimize, VscClose } from "react-icons/vsc";
import { links } from "../linksElement";
const MobileNav = ({ showMenu, handleShowMenu, user }) => {
    const [showLinks, setShowLinks] = useState("");
    const handleShowLink = (name) => {
        if (showLinks === name) setShowLinks("");
        else setShowLinks(name);
    };
    const [showProfile, setShowProfile] = useState(false);
    return (
        <aside
            className={
                showMenu
                    ? "off-canvas-wrapper active lg:hidden"
                    : "hidden off-canvas-wrapper lg:hidden"
            }
        >
            <div className='off-canvas-inner'>
                <div
                    className='off-canvas-overlay'
                    onClick={() => handleShowMenu(false)}
                ></div>
                <div className='off-canvas-content'>
                    <div className='flex items-start justify-end py-4 w-full ml-5'>
                        <button onClick={() => handleShowMenu(false)}>
                            <VscClose
                                className='
                        icon icon-search show !text-4xl hover:text-red text-gray'
                            />
                        </button>
                    </div>
                    <div className='off-canvas-item'>
                        <div className='res-mobile-menu menu-active-one'>
                            <div className='slicknav_menu'>
                                <ul
                                    className='slicknav_nav slicknav_hidden'
                                    style={{ outline: "none" }}
                                    aria-hidden='true'
                                >
                                    {links.map((item, index) => {
                                        const {
                                            routeName,
                                            name,
                                            subLinks = [],
                                        } = item || {};
                                        return (
                                            <li
                                                key={index}
                                                className=' flex justify-between items-center'
                                            >
                                                {subLinks?.length > 0 ? (
                                                    <div className='w-full'>
                                                        <button
                                                            onClick={() =>
                                                                handleShowLink(
                                                                    name
                                                                )
                                                            }
                                                            className='flex justify-between w-full items-center'
                                                        >
                                                            <span>{name}</span>
                                                            {showLinks !==
                                                            name ? (
                                                                <AiOutlinePlus />
                                                            ) : (
                                                                <VscChromeMinimize />
                                                            )}
                                                        </button>
                                                        {showLinks === name &&
                                                            subLinks?.map(
                                                                (
                                                                    item,
                                                                    index
                                                                ) => {
                                                                    const {
                                                                        routeName,
                                                                        name,
                                                                    } =
                                                                        item ||
                                                                        {};
                                                                    return (
                                                                        <Link
                                                                            to={`/${routeName}`}
                                                                            key={
                                                                                index
                                                                            }
                                                                            className='flex mt-2.5'
                                                                        >
                                                                            {
                                                                                name
                                                                            }
                                                                        </Link>
                                                                    );
                                                                }
                                                            )}
                                                    </div>
                                                ) : (
                                                    <Link to={`/${routeName}`}>
                                                        {name}
                                                    </Link>
                                                )}
                                            </li>
                                        );
                                    })}
                                    <li className=' flex justify-between items-center'>
                                        {user?.email ? (
                                            <div className='w-full'>
                                                <button
                                                    onClick={() =>
                                                        setShowProfile(
                                                            !showProfile
                                                        )
                                                    }
                                                    className='flex justify-between w-full items-center'
                                                >
                                                    <span>Profile</span>
                                                    {!showProfile ? (
                                                        <AiOutlinePlus />
                                                    ) : (
                                                        <VscChromeMinimize />
                                                    )}
                                                </button>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default MobileNav;
