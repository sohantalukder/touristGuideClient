import React from "react";
import { RiMoneyPoundCircleFill } from "react-icons/ri";

const UserIncome = () => {
    return (
        <div className='my-10 flex flex-col md:flex-row  space-y-8 space-x-0 md:space-x-8 md:space-y-0'>
            <div className=' w-full md:w-[70%]'>
                <h1 className='text-2xl md:text-3xl font-medium mb-6'>
                    Status
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
                    <div className='flex flex-row items-center space-x-8'>
                        <div className='p-5  bg-greenLight text-white rounded-lg text-5xl'>
                            <RiMoneyPoundCircleFill />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h3 className='font-semibold text-lg'>
                                Today Income
                            </h3>
                            <h2 className='font-medium text-2xl text-green'>
                                BDT 56/-
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-8'>
                        <div className='p-5  bg-greenLight text-white rounded-lg text-5xl'>
                            <RiMoneyPoundCircleFill />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h3 className='font-semibold text-lg'>
                                Today Income
                            </h3>
                            <h2 className='font-medium text-2xl text-green'>
                                BDT 56/-
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-8'>
                        <div className='p-5  bg-greenLight text-white rounded-lg text-5xl'>
                            <RiMoneyPoundCircleFill />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h3 className='font-semibold text-lg'>
                                Today Income
                            </h3>
                            <h2 className='font-medium text-2xl text-green'>
                                BDT 56/-
                            </h2>
                        </div>
                    </div>
                    <div className='flex flex-row items-center space-x-8'>
                        <div className='p-5  bg-greenLight text-white rounded-lg text-5xl'>
                            <RiMoneyPoundCircleFill />
                        </div>
                        <div className='flex flex-col space-y-1'>
                            <h3 className='font-semibold text-lg'>
                                Today Income
                            </h3>
                            <h2 className='font-medium text-2xl text-green'>
                                BDT 56/-
                            </h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[30%]'>
                <h1 className='text-2xl md:text-3xl font-medium mb-6'>
                    My Balance
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <div className='flex flex-row items-center space-x-8'>
                        <div className='p-5  bg-greenLight text-white rounded-lg '>
                            <p className='font-medium text-sm'>Total Income</p>
                            <p className='my-5 text-base'>BDT 6800/-</p>
                            <hr />
                            <button className='text-center my-3'>
                                Withdraw
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-row items-center space-x-8 '>
                        <div className='p-5  bg-gray text-white rounded-lg '>
                            <p className='font-medium text-sm'>Total Income</p>
                            <p className='my-5 text-base'>BDT 6800/-</p>
                            <hr />
                            <button className='text-center my-3'>
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserIncome;
