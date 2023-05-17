import Link from "next/link";
import React from "react";

const District = ({ district }) => {
    return (
        <div className='flex text-sm'>
            <Link
                href='/{district}'
                className='hover:underline hover:text-green '
            >
                {district}
            </Link>
            <p className='text-green ml-1'>(10)</p>
        </div>
    );
};

export default District;
