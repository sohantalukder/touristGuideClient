import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import Image from "../image/Image";
import { Link } from "react-router-dom";
import ScreenNav from "./components/ScreenNav";
import MobileNav from "./components/MobileNav";
const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowMenu = (e) => {
        setShowMenu(e);
    };
    const { preference } = useSelector((state) => state.preference) || {};
    const { user } = useSelector((state) => state.auth) || {};
    const { logos } = preference || {};
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
                                                <Image
                                                    src={logos?.blackLogo}
                                                    alt='Logo'
                                                />
                                            </span>
                                            <span className={"logo-light"}>
                                                <Image
                                                    src={logos?.blackLogo}
                                                    alt='Logo'
                                                />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                {
                                    <ScreenNav
                                        setShowMenu={setShowMenu}
                                        user={user}
                                    />
                                }
                            </div>
                        </div>
                    </header>
                </div>
                <MobileNav
                    showMenu={showMenu}
                    handleShowMenu={handleShowMenu}
                    user={user}
                />
            </div>
        </div>
    );
};

export default NavBar;
