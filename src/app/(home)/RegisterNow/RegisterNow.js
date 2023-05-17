import React from "react";

const RegisterNow = () => {
    return (
        <div className='bg-green'>
            <div
                className='container mx-auto max-w-[1180px]
            py-12 flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 md:items-center  text-white'
            >
                <div>
                    <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header-w'>
                        People Share Visited Stroy
                    </h1>
                    <p>
                        Our goal is to get to the place of your choice very
                        easily and let you enjoy the natural beauty of
                        Bangladesh.
                    </p>
                </div>
                <button className='border-2 border-white hover:bg-black hover:border-black transition-all px-6 py-2 rounded-md'>
                    Register Now
                </button>
            </div>
        </div>
    );
};

export default RegisterNow;
