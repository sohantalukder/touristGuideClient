import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { IoMdSearch } from "react-icons/io";
import { VscChromeMinimize, VscClose } from "react-icons/vsc";
import logo from "../../assets/logo/Black logo.svg";
import { useSelector } from "react-redux";
import Image from "../image/Image";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [click, setClick] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = (e) => setShow(e);
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = (e) => {
        setShowMenu(e);
    };
    const [sticky, setSticky] = useState(false);
    const [slickNav, setSlickNav] = useState(false);
    const [slickNav2, setSlickNav2] = useState(false);
    const [slickNav3, setSlickNav3] = useState(false);
    const [slickNav4, setSlickNav4] = useState(false);
    const handleSlickNav = () => {
        setSlickNav((slickNav) => !slickNav);
    };
    const handleSlickNav2 = () => {
        setSlickNav2((slickNav2) => !slickNav2);
    };
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

    const closeMenu = () => setClick(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const handleSearch = (e) => {
        setSearchOpen(e);
    };
    useEffect(() => {
        window.addEventListener("scroll", stickyHeder);
    }, []);
    const { user: userData } = useSelector((state) => state.auth);
    const [user, setUser] = useState({});
    useEffect(() => {
        if (userData) {
            setUser(userData);
        }
    }, [userData]);
    return (
        <div className='preloader-deactive fix header'>
            <div>
                <div className={showMenu ? "hidden" : "block"}>
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
                                        <Link to='/'>
                                            <span className={"logo-main"}>
                                                <Image src={logo} alt='Logo' />
                                            </span>
                                            <span className={"logo-light"}>
                                                <Image src={logo} alt='Logo' />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-span-5 sm:col-span-8 md:col-span-8 lg:col-span-10'>
                                    <div className='header-align'>
                                        <div className='header-navigation-area navigation-style-two'>
                                            <ul className='main-menu flex flex-wrap pl-0 mb-0  justify-center'>
                                                <li className='active'>
                                                    <Link to='/'>Home</Link>
                                                </li>

                                                <li className='has-submenu'>
                                                    <Link to='/destinations'>
                                                        Destinations
                                                    </Link>
                                                </li>
                                                <li className='has-submenu'>
                                                    <Link to='/createEvent'>
                                                        Create Event
                                                    </Link>
                                                </li>

                                                <li className='has-submenu'>
                                                    <span>Blogs</span>
                                                    <ul className='submenu-nav'>
                                                        <li>
                                                            <Link to='/blog'>
                                                                Blog
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/shareHistory'>
                                                                Create Blog
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='has-submenu'>
                                                    <span>Pages</span>
                                                    <ul className='submenu-nav'>
                                                        <li>
                                                            <Link to='/gallery'>
                                                                Gallery
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/guiders'>
                                                                Hire Guiders
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to='/contact'>
                                                                Contact Us
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='header-action-area flex items-center'>
                                            <button className='btn-search'>
                                                {!show ? (
                                                    <BiSearch
                                                        className='icon icon-search !text-2xl hover:text-green text-gray font-thin'
                                                        onClick={() =>
                                                            handleShow(true)
                                                        }
                                                    />
                                                ) : (
                                                    <VscClose
                                                        onClick={() =>
                                                            handleShow(false)
                                                        }
                                                        className={
                                                            show
                                                                ? "icon icon-search show !text-3xl hover:text-red text-gray"
                                                                : "icon icon-search-close "
                                                        }
                                                    />
                                                )}
                                            </button>
                                            {show ? (
                                                <div
                                                    className={
                                                        show
                                                            ? "btn-search-content show"
                                                            : "btn-search-content "
                                                    }
                                                >
                                                    <form
                                                        action='#'
                                                        method='post'
                                                    >
                                                        <div className='form-input-item'>
                                                            <input
                                                                type='text'
                                                                id='search'
                                                                className='focus:outline-none border border-mediumGray !hover:border-green !focus:border-green'
                                                                placeholder='Search...'
                                                            />
                                                            <button
                                                                type='submit'
                                                                className='btn-src'
                                                            >
                                                                <i className='lnr lnr-magnifier'></i>
                                                                <IoMdSearch className='lnr-magnifier text-gray text-base' />
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            ) : (
                                                <div></div>
                                            )}
                                            <button
                                                className='btn-menu lg:hidden'
                                                onClick={() =>
                                                    handleShowMenu(true)
                                                }
                                            >
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </button>
                                            {user?.name ? (
                                                <Link
                                                    className='btn-theme btn-two'
                                                    to='/profile'
                                                >
                                                    {user?.name}
                                                </Link>
                                            ) : (
                                                <Link
                                                    className='btn-theme btn-two'
                                                    to='/login'
                                                >
                                                    Log In
                                                </Link>
                                            )}
                                        </div>
                                    </div>
                                </div>
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
                        {/* <!-- Start Off Canvas Content Wrapper --> */}
                        <div className='off-canvas-content'>
                            {/* <!-- Off Canvas Header --> */}
                            <div className='off-canvas-header'>
                                <div className='logo-area'>
                                    <a to='index.html'>
                                        <Image src={logo} alt={"Logo"} />
                                    </a>
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

                            <div className='off-canvas-item'>
                                <div className='res-mobile-menu menu-active-one'>
                                    <div className='slicknav_menu'>
                                        <a
                                            to='#asdasd'
                                            aria-haspopup='true'
                                            role='button'
                                            className='slicknav_btn slicknav_collapsed'
                                            style={{ outline: "none" }}
                                        >
                                            <span className='slicknav_menutxt'>
                                                MENU
                                            </span>
                                            <span className='slicknav_icon'>
                                                <span className='slicknav_icon-bar'></span>
                                                <span className='slicknav_icon-bar'></span>
                                                <span className='slicknav_icon-bar'></span>
                                            </span>
                                        </a>
                                        <ul
                                            className='slicknav_nav slicknav_hidden space-y-2'
                                            style={{ outline: "none" }}
                                            aria-hidden='true'
                                        >
                                            <li>
                                                <Link
                                                    to='/'
                                                    onClick={() =>
                                                        handleShowMenu(false)
                                                    }
                                                >
                                                    Home
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/destinations'
                                                    onClick={() =>
                                                        handleShowMenu(false)
                                                    }
                                                >
                                                    Destinations
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to='/createEvent'
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
                                                            to='/blogs'
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
                                                            to='/shareHistory'
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
                                                            to='gallery'
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
                                                            to='guiders'
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
                                                            to='contact'
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
                                {/* <!-- End Mobile Menu Wrapper --> */}
                            </div>
                            {/* <!-- Off Canvas Footer --> */}
                            <div className='off-canvas-footer'></div>
                        </div>
                        {/* <!-- End Off Canvas Content Wrapper --> */}
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default NavBar;
