"use client";
import React from "react";
import Stars from "react-stars-display";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import sabbir from "../../assets/Guiders/image1.jpg";
import Image from "next/image";
import Link from "next/link";

const TopGuiders = () => {
    const guiders = [
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
        {
            name: "Md. Sabbir Ahmed",
            description: `Slate helps you see how 
            many more days you need 
            to work to reach your financial 
            goal for the month and year.`,
            price: "50",
            rating: "4",
            designation: "Marketing Head",
            image: sabbir,
        },
    ];
    return (
        <div className='container max-w-[1180px] mx-auto my-16'>
            <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                Top Tending Tourist Places
            </h1>
            <p className='mb-12'>
                Our goal is to get to the place of your choice very easily and
                let you enjoy the natural beauty of Bangladesh.
            </p>
            <div className='flex justify-center'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        630: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Autoplay]}
                    className='mySwiper flex justify-between '
                >
                    {guiders.map((guider) => (
                        <SwiperSlide className=' relative border border-mediumGray '>
                            <div className='absolute top-4 right-4'>
                                <p className='font-semibold'>
                                    ${guider.price}/ hr
                                </p>
                            </div>
                            <div className='px-16 pt-16 flex flex-col justify-center items-center '>
                                <div className='rounded-full w-[150px] h-[150px] overflow-hidden'>
                                    <Image
                                        src={guider.image}
                                        alt=''
                                        className='w-full h-full  bg-center  bg-contain'
                                    />
                                </div>

                                <p className='pt-7 pb-2 text-center'>
                                    {guider.description}
                                </p>
                                <Stars
                                    stars={guider.rating}
                                    size={30}
                                    spacing={2}
                                    fill='#5fbe00'
                                />
                                <h3 className='text-green font-semibold text-lg pb-2 pt-2'>
                                    {guider.name}
                                </h3>
                                <p className='font-semibold pb-3'>
                                    {guider.designation}
                                </p>
                            </div>
                            <div className='flex justify-center'>
                                <Link
                                    href='/hireMe'
                                    className='hover:bg-green text-gray hover:text-white transition-all w-full text-center py-3'
                                >
                                    Hire Me
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default TopGuiders;
