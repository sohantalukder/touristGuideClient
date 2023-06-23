import React from "react";
import { Link } from "react-router-dom";
import { links } from "../linksElement";

const NavLinks = () => {
    return (
        <ul className='main-menu flex flex-wrap pl-0 mb-0  justify-center'>
            {links.map((item, index) => {
                return (
                    <li key={index} className='has-submenu'>
                        {item?.subLinks?.length > 0 ? (
                            <>
                                <span>{item?.name}</span>
                                <ul className='submenu-nav'>
                                    {item?.subLinks?.map((item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link
                                                    to={`/$${item?.routeName}`}
                                                >
                                                    {item?.name}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        ) : (
                            <Link to={`/${item?.routeName}`}>{item?.name}</Link>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default NavLinks;
