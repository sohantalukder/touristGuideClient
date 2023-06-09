import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeMinimize, VscClose } from "react-icons/vsc";
import logo from "../../assets/logo/Black logo.svg";
import { useSelector } from "react-redux";
import Image from "../image/Image";
import { Link } from "react-router-dom";
import ScreenNav from "./components/ScreenNav";
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = (e) => {
        setShowMenu(e);
    };
    const [sticky, setSticky] = useState(false);
    const [slickNav3, setSlickNav3] = useState(false);
    const [slickNav4, setSlickNav4] = useState(false);

    const handleSlickNav3 = () => {
        setSlickNav3((slickNav3) => !slickNav3);
    };
    const handleSlickNav4 = () => {
        setSlickNav4((slickNav4) => !slickNav4);
    };
    const stickyHeder = () => {
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", stickyHeder);
    }, []);
    const { user: userData } = useSelector((state) => state.auth);
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(userData);
    }, [userData]);
    const links = [
        {
            name: "Home",
            routeName: "home",
        },
        {
            name: "Destinations",
            routeName: "destinations",
        },
        {
            name: "Create Event",
            routeName: "create_event",
        },
        {
            name: "Blog",
            routeName: "blog",
            subLinks: [
                { name: "Blog", routeName: "blog" },
                { name: "Create Blog", routeName: "create_blog" },
            ],
        },
        {
            name: "Pages",
            routeName: "pages",
            subLinks: [
                { name: "Gallery", routeName: "gallery" },
                { name: "Hire Guiders", routeName: "hire_guiders" },
                { name: "Contact Us", routeName: "contact_us" },
            ],
        },
    ];
    return (
        <div className='preloader-deactive fix'>
            <div>
                <div className={"block"}>
                    <header
                        className={
                            sticky
                                ? "sticky header-area header-default sticky-header p-0 "
                                : "header-area header-default sticky-header"
                        }
                    >
                        <div className='container mx-auto max-w-[1180px]'>
                            <div className='grid grid-cols-12 items-center justify-between'>
                                <div className='col-span-7  sm:col-span-4 md:col-span-4 lg:col-span-2 '>
                                    <div className='header-logo-area'>
                                        <Link href='/'>
                                            <span className={"logo-main"}>
                                                <Image src={logo} alt='Logo' />
                                            </span>
                                            <span className={"logo-light"}>
                                                <Image src={logo} alt='Logo' />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {
                                    <ScreenNav
                                        links={links}
                                        setShowMenu={setShowMenu}
                                        user={user}
                                    />
                                }
                            </div>
                        </div>
                    </header>
                </div>
                <aside
                    className={
                        showMenu
                            ? "off-canvas-wrapper active"
                            : "off-canvas-wrapper "
                    }
                >
                    <div className='off-canvas-inner'>
                        <div className='off-canvas-overlay'></div>
                        <div className='off-canvas-content'>
                            <div className='off-canvas-header'>
                                <div className='logo-area'>
                                    <Link to='/'>
                                        <Image src={logo} alt='Logo' />
                                    </Link>
                                </div>
                                <div className='close-action'>
                                    <button
                                        className='btn-close'
                                        onClick={() => handleShowMenu(false)}
                                    >
                                        <VscClose
                                            className='
                                            icon icon-search show !text-4xl hover:text-red text-gray'
                                        />
                                    </button>
                                </div>
                            </div>
                            <div
                                className='off-canvas-item'
                                onClick={() => handleShowMenu(false)}
                            >
                                <div className='res-mobile-menu menu-active-one'>
                                    <div className='slicknav_menu'>
                                        <ul
                                            className='slicknav_nav slicknav_hidden space-y-2'
                                            style={{ outline: "none" }}
                                            aria-hidden='true'
                                        >
                                            <li>
                                                <Link href='/'>Home</Link>
                                            </li>
                                            <li>
                                                <Link href='/destinations'>
                                                    Destinations
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    href='/createEvent'
                                                    onClick={() =>
                                                        handleShowMenu(false)
                                                    }
                                                >
                                                    Create Event
                                                </Link>
                                            </li>
                                            <li className='slicknav_collapsed slicknav_parent'>
                                                <span
                                                    aria-haspopup='true'
                                                    onClick={handleSlickNav3}
                                                    className='slicknav_item slicknav_row flex justify-between items-center'
                                                    style={{ outline: "none" }}
                                                >
                                                    <span>Blog</span>
                                                    <span className='slicknav_arrow'>
                                                        {slickNav3 ? (
                                                            <VscChromeMinimize />
                                                        ) : (
                                                            <AiOutlinePlus />
                                                        )}
                                                    </span>
                                                </span>
                                                <ul
                                                    className={
                                                        slickNav3
                                                            ? "block space-y-1 mt-2 !pb-0"
                                                            : "hidden "
                                                    }
                                                    style={{ outline: "none" }}
                                                    aria-hidden='true'
                                                >
                                                    <li>
                                                        <Link
                                                            href='/blogs'
                                                            onClick={() =>
                                                                handleShowMenu(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Blogs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href='/shareHistory'
                                                            onClick={() =>
                                                                handleShowMenu(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Create Blog
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className='slicknav_collapsed slicknav_parent'>
                                                <span
                                                    onClick={handleSlickNav4}
                                                    className='slicknav_item slicknav_row flex justify-between items-center'
                                                    style={{ outline: "none" }}
                                                >
                                                    <span>Blog</span>
                                                    <span className='slicknav_arrow'>
                                                        {slickNav4 ? (
                                                            <VscChromeMinimize />
                                                        ) : (
                                                            <AiOutlinePlus />
                                                        )}
                                                    </span>
                                                </span>
                                                <ul
                                                    className={
                                                        slickNav4
                                                            ? "block space-y-1 mt-2 !pb-0"
                                                            : "hidden "
                                                    }
                                                    style={{ outline: "none" }}
                                                    aria-hidden='true'
                                                >
                                                    <li>
                                                        <Link
                                                            href='gallery'
                                                            onClick={() =>
                                                                handleShowMenu(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Gallery
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href='guiders'
                                                            onClick={() =>
                                                                handleShowMenu(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Hire Guiders
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href='contact'
                                                            onClick={() =>
                                                                handleShowMenu(
                                                                    false
                                                                )
                                                            }
                                                        >
                                                            Contact Us
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='off-canvas-footer'></div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default NavBar;
