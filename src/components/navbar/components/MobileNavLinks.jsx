import React from "react";
import { links } from "../linksElement";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { VscChromeMinimize } from "react-icons/vsc";
const MobileNavLinks = ({ showLinks, handleShowLink }) => {
    return (
        <>
            {links.map((item, index) => {
                const { routeName, name, subLinks = [] } = item || {};
                return (
                    <li
                        key={index}
                        className=' flex justify-between items-center'
                    >
                        {subLinks?.length > 0 ? (
                            <div className='w-full'>
                                <button
                                    onClick={() => handleShowLink(name)}
                                    className='flex justify-between w-full items-center'
                                >
                                    <span>{name}</span>
                                    {showLinks !== name ? (
                                        <AiOutlinePlus />
                                    ) : (
                                        <VscChromeMinimize />
                                    )}
                                </button>
                                {showLinks === name &&
                                    subLinks?.map((item, index) => {
                                        const { routeName, name } = item || {};
                                        return (
                                            <Link
                                                to={`/${routeName}`}
                                                key={index}
                                                className='flex mt-2.5'
                                            >
                                                {name}
                                            </Link>
                                        );
                                    })}
                            </div>
                        ) : (
                            <Link to={`/${routeName}`}>{name}</Link>
                        )}
                    </li>
                );
            })}
        </>
    );
};

export default MobileNavLinks;
