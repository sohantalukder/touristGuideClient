import React from "react";

import background from "../../assets/social-intractions/social-intractions.jpg";
const Counter = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${background.src})`,
                backgroundPosition: "fixed",
            }}
        >
            <div className='container max-w-[1180px] mx-auto py-12'>
                <div className='flex flex-wrap flex-col sm:flex-row md:flex-nowrap justify-start sm:justify-between items-center  text-white 0 '>
                    {/* <div className='flex flex-col md:flex-row sm:items-start items-center'>
                        <span className='mr-2'>
                            <MdOutlineLocationCity className='text-2xl' />
                        </span>
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='text-xl font-semibold'>
                                <CountUp end={550} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h3>
                            <p>Tourist Place</p>
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row sm:items-start items-center'>
                        <span className='mr-2'>
                            <GrMapLocation className=' bg-white text-2xl' />
                        </span>
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='text-xl font-semibold'>
                                <CountUp end={700} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h3>
                            <p>Nearest Hotel & Restaurant</p>
                        </div>
                    </div>
                    <div className='mt-6 lg:mt-0 md:mt-0 flex flex-col md:flex-row sm:items-start items-center'>
                        <span className='mr-2 '>
                            <GiCrossroad className='text-2xl' />
                        </span>
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='text-xl font-semibold'>
                                <CountUp end={20} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h3>
                            <p>Guides Can Always Help</p>
                        </div>
                    </div>
                    <div className='mt-6 lg:mt-0 flex flex-col md:flex-row sm:items-start items-center'>
                        <span className='mr-2 '>
                            <RiBusWifiLine className='text-2xl' />
                        </span>
                        <div className='flex flex-col items-center md:items-start'>
                            <h3 className='text-xl font-semibold'>
                                <CountUp end={1000} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor
                                            onChange={start}
                                            delayedCall
                                        >
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                +
                            </h3>
                            <p>Bus Services</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Counter;
