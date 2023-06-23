import React, { useState } from "react";
import { VscClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../../redux/slice/authentication/authSlice";
import MobileNavLinks from "./MobileNavLinks";
import MobileProfileLink from "./MobileProfileLink";
const MobileNav = ({ showMenu, handleShowMenu, user }) => {
    const [showLinks, setShowLinks] = useState("");
    const handleShowLink = (name) => {
        if (showLinks === name) setShowLinks("");
        else setShowLinks(name);
    };
    const dispatch = useDispatch();
    const logOut = () => {
        setShowLinks("");
        handleShowMenu(false);
        dispatch(userLoggedOut());
    };
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
                                    <MobileNavLinks
                                        handleShowLink={handleShowLink}
                                        showLinks={showLinks}
                                    />
                                    <MobileProfileLink
                                        handleShowLink={handleShowLink}
                                        logOut={logOut}
                                        showLinks={showLinks}
                                        user={user}
                                    />
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
