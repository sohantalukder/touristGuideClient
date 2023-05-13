"use client";
import React, { useState } from "react";

const Accordion = ({ data }) => {
    const { paragraph, title } = data;

    const [opened, setOpened] = useState(true);
    return (
        <div
            className={
                opened ? "accordion group" : "accordion-item--opened group "
            }
            onClick={() => (!opened ? setOpened(true) : setOpened(false))}
        >
            <div className='accordion-item__line'>
                <h3 className='accordion-item__title group-hover:text-green group-focus:text-green'>
                    {title}
                </h3>
                <span className='accordion-item__icon' />
            </div>
            <div className='accordion-item__inner'>
                <div className='text-gray'>
                    <p className='accordion-item__paragraph mt-2'>
                        {paragraph}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
