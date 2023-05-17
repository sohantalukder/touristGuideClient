import Image from "next/image";
import React from "react";
import { TiLocation } from "react-icons/ti";
const Item = ({ item }) => {
    return (
        <div className='shadow-md relative'>
            <Image
                src={item.image}
                className='h-[165px] w-full z-0 bg-cover'
                alt=''
            />

            <p className='absolute top-28  py-1 px-3 bg-red text-white '>
                Top Rated
            </p>
            <span className='absolute top-36 right-7 rounded-full  py-2 px-2 bg-green text-white'>
                <TiLocation className='text-xl' />
            </span>
            <div className='p-4 mt-1'>
                <h3 className='font-semibold text-[15px] mb-1'>{item.name}</h3>
                <p className='text-[14px]'>{item.description.slice(0, 150)}</p>
            </div>
        </div>
    );
};

export default Item;
