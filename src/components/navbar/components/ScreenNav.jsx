import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import NavProfileInfo from "./NavProfileInfo";
import { RxHamburgerMenu } from "react-icons/rx";
import { routes } from "../../../route/routeName";

const ScreenNav = ({ user, setShowMenu }) => {
    return (
        <div className='col-span-5 sm:col-span-8 md:col-span-8 lg:col-span-10'>
            <div className='header-align'>
                <div className='header-navigation-area navigation-style-two'>
                    {<NavLinks />}
                </div>
                <div className='header-action-area flex items-center'>
                    <button
                        className='btn-menu lg:hidden'
                        onClick={() => setShowMenu((prevState) => !prevState)}
                    >
                        <RxHamburgerMenu className='text-3xl' />
                    </button>
                    {user?.name ? (
                        <NavProfileInfo user={user} />
                    ) : (
                        <Link
                            className='btn-theme hidden md:block btn-two'
                            to={routes.login}
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
