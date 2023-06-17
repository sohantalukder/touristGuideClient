import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavProfileInfo from "./NavProfileInfo";
const ScreenNav = ({ user, setShowMenu, links }) => {
    return (
        <div className='col-span-5 sm:col-span-8 md:col-span-8 lg:col-span-10'>
            <div className='header-align'>
                <div className='header-navigation-area navigation-style-two'>
                    {<NavLinks links={links} />}
                </div>
                <div className='header-action-area flex items-center'>
                    <button
                        className='btn-menu lg:hidden'
                        onClick={() => setShowMenu((prevState) => !prevState)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    {user?.name ? (
                        <NavProfileInfo user={user} />
                    ) : (
                        <Link
                            className='btn-theme hidden md:block btn-two'
                            to='/login'
                        >
                            Log In
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ScreenNav;
