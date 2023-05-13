"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoB from "../../assets/logo/Black logo.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // Change color of header
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeColor);
    }, []);
    const closeMenu = () => setClick(false);

    return (
        <div className={color ? "navbar-home  nav-scrolled" : "navbar-home"}>
            <nav className='navbar container mx-auto flex justify-between !px-6'>
                <Link href='/' className='logo'>
                    <Image src={logoB} className='w-28 h-auto' alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (
                        <FaTimes size={30} style={{ color: "#ffffff" }} />
                    ) : (
                        <FaBars size={30} style={{ color: "#ffffff" }} />
                    )}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='relative navList'>
                        <Link
                            href='/home'
                            className='navItem'
                            onClick={closeMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li className='relative navList'>
                        <Link
                            href='/destinations'
                            className='navItem'
                            onClick={closeMenu}
                        >
                            Destination
                        </Link>
                    </li>
                    <li className=' group relative navList'>
                        <Link
                            href='/pages'
                            className='navItem'
                            onClick={closeMenu}
                        >
                            Pages
                        </Link>
                        <ul className='dropdown hidden group-hover:block font-medium'>
                            <li className='relative block'>
                                <Link href='/guide' className='nav__link'>
                                    Guide
                                </Link>
                            </li>
                            <li className='relative block'>
                                <Link href='/gallery' className='nav__link'>
                                    Gallery
                                </Link>
                            </li>
                            <li className='relative block'>
                                <Link href='/createEvent' className='nav__link'>
                                    Create Event
                                </Link>
                            </li>
                            <li className='relative block'>
                                <Link href='/contact' className='nav__link'>
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className='hidden lg:block space-x-0 md:space-x-6'>
                    <Link
                        href='/login'
                        className='  px-6 py-2 border border-black hover:bg-green  hover:border-green transition-all hover:text-white  font-medium'
                    >
                        Log In
                    </Link>
                    <Link
                        href='/register'
                        className=' px-6 py-2 border text-white border-green bg-green hover:bg-green hover:border-green transition-all font-medium'
                    >
                        Register
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
