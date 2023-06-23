import React from "react";
import { Link } from "react-router-dom";

const District = ({ district }) => {
    return (
        <div className='flex text-sm'>
            <Link
                to='/{district}'
                className='hover:underline hover:text-green '
            >
                {district}
            </Link>
            <p className='text-green ml-1'>(10)</p>
        </div>
    );
};

export default District;
