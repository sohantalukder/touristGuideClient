"use client";
import React from "react";
import { MdLocationOn, MdNearMe } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../assets/full-view-iamge/image1.jpg";
import Link from "next/link";
import Image from "next/image";
const events = [
    {
        id: "1",
        eventName: "Banaue Rice Terraces",
        location: `Banaue, Ifugao, Philippines`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque qui sint a temporibus dicta repellendus culpa veniam vitae error.`,
        price: "50",
        join: "4",
        nearest: "Near Mountain",
        image: image,
        totalDays: "10",
    },
    {
        id: "2",
        eventName: "Banaue Rice Terraces",
        location: `Banaue, Ifugao, Philippines`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque qui sint a temporibus dicta repellendus culpa veniam vitae error.`,
        price: "50",
        join: "4",
        nearest: "Near Mountain",
        image: image,
        totalDays: "10",
    },
    {
        id: "3",
        eventName: "Banaue Rice Terraces",
        location: `Banaue, Ifugao, Philippines`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque qui sint a temporibus dicta repellendus culpa veniam vitae error.`,
        price: "50",
        join: "4",
        nearest: "Near Mountain",
        image: image,
        totalDays: "10",
    },
    {
        id: "4",
        eventName: "Banaue Rice Terraces",
        location: `Banaue, Ifugao, Philippines`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque qui sint a temporibus dicta repellendus culpa veniam vitae error.`,
        price: "50",
        join: "4",
        nearest: "Near Mountain",
        image: image,
        totalDays: "10",
    },
    {
        id: "5",
        eventName: "Banaue Rice Terraces",
        location: `Banaue, Ifugao, Philippines`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque qui sint a temporibus dicta repellendus culpa veniam vitae error.`,
        price: "50",
        join: "4",
        totalDays: "10",
        nearest: "Near Mountain",
        image: image,
    },
];
const Events = () => {
    return (
        <div className='container max-w-[1180px] mx-auto my-16   px-4 lg:px-0 py-16 mt-16'>
            <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                Top Tending Tourist Places
            </h1>
            <p className='mb-12'>
                Our goal is to get to the place of your choice very easily and
                let you enjoy the natural beauty of Bangladesh.
            </p>
            <div className='flex justify-center relative'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    autoplay={{
                        delay: 3500,
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
                    {events.map((event) => (
                        <SwiperSlide className='  '>
                            <div class='project-wrap'>
                                <Link
                                    href={`/eventView/${event.id}`}
                                    class='img'
                                >
                                    <Image src={event.image} alt='' />
                                    <span class='price'>
                                        ${event.price}/ person
                                    </span>
                                </Link>
                                <div class='text p-4'>
                                    <span class='days'>
                                        {event.totalDays} Days Tour
                                    </span>
                                    <h3>
                                        <Link href={`/eventView/${event.id}`}>
                                            {event.eventName}
                                        </Link>
                                    </h3>
                                    <p className='text-sm text-gray'>
                                        {event.description.slice(0, 140)}...
                                    </p>
                                    <p class='location flex items-center !space-x-2 my-2'>
                                        <MdLocationOn className='text-xl text-[#f15d30] mr-1' />{" "}
                                        {event.location}
                                    </p>
                                    <ul className='w-full flex items-center space-x-3'>
                                        <li className='flex flex-row items-center space-x-2'>
                                            <RiContactsFill className='text-base' />
                                            <span className='!text-base'>
                                                {event.join}
                                            </span>
                                        </li>

                                        <li className='flex flex-row items-center space-x-2'>
                                            <MdNearMe className='text-base' />
                                            <span className='!text-base'>
                                                {event.nearest}
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Events;
