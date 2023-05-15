"use client"
import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const ScrollTop = () => {
    const [sticky, setSticky] = useState(false);
    const stickyHeder = () => {
        if (window.scrollY >= 200) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", stickyHeder);
    }, []);
    return (
        <div className={sticky ? "block" : "hidden"}>
            <a href='#' className='scroll-top'>
                <MdOutlineKeyboardArrowUp className='text-3xl font-thin' />
            </a>
        </div>
    );
};

export default ScrollTop;
