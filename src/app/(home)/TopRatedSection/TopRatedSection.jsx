"use client";
import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import backgroundImage from "../../assets/top-rated/bg.png";
import {
    default as Kishoregonj,
    default as Sundarban,
} from "../../assets/top-rated/item-1(Nikli).jpg";
import {
    default as Bandarban,
    default as Sajek,
} from "../../assets/top-rated/Item-2(Sajek).jpg";
import CoxsBazar from "../../assets/top-rated/item-3(Cox_s Bazar).jpg";
import Martin from "../../assets/top-rated/item-5(St. Iceland).jpg";
import Link from "next/link";
import Image from "next/image";
const topRated = [
    {
        id: 1,
        placeName: "Sundarban",
        image: Sundarban,
        peopleBorn: 145,
    },
    {
        id: 2,
        placeName: "Sajek",
        image: Sajek,
        peopleBorn: 139,
    },
    {
        id: 3,
        placeName: "Cox's Bazar",
        image: CoxsBazar,
        peopleBorn: 98,
    },
    {
        id: 4,
        placeName: "St. Martin",
        image: Martin,
        peopleBorn: 15,
    },
    {
        id: 5,
        placeName: "Bandarban",
        image: Bandarban,
        peopleBorn: 640,
    },
    {
        id: 6,
        placeName: "Kishoregonj",
        image: Kishoregonj,
        peopleBorn: 30,
    },
];
const TopRatedSection = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
            }}
            className='h-'
        >
            <div className='container max-w-[1180px] py-12 mx-auto text-white px-5 md:px-0'>
                <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                    Top-rated Tourist Place
                </h1>
                <p>
                    Our aim is to provide you with a top-quality tour
                    experience.
                </p>
                {/* Best link */}
                <div className='lg:flex hidden justify-center items-center py-8 space-x-8'>
                    <Link
                        href='/Tangail'
                        className='border border-green px-8 py-2 text-white hover:bg-green transition-all'
                    >
                        Tangail
                    </Link>
                    <Link
                        href='/coxsBazar'
                        className='border border-green px-8 py-2 text-white bg-green transition-all'
                    >
                        Cox's Bazar
                    </Link>
                    <Link
                        href='/Lalbag'
                        className='border border-green px-8 py-2 text-white hover:bg-green transition-all'
                    >
                        Lalbag
                    </Link>
                    <Link
                        href='/Sunamganj'
                        className='border border-green px-8 py-2 text-white hover:bg-green transition-all'
                    >
                        Sunamganj
                    </Link>
                    <Link
                        href='/Sylhet'
                        className='border border-green px-8 py-2 text-white hover:bg-green transition-all'
                    >
                        Sylhet
                    </Link>
                </div>
                <div className='flex justify-center'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            630: {
                                slidesPerView: 1,
                                spaceBetween: 0,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay]}
                        className='mySwiper flex justify-between'
                    >
                        {topRated.map((location) => (
                            <SwiperSlide className='pt-6 relative'>
                                <Link href={`/${location.placeName}`}>
                                    <div className='overflow-hidden'>
                                        <Image
                                            src={location.image}
                                            className=' bg-white   hover:scale-[1.2] transition-all'
                                            alt=''
                                        />
                                    </div>
                                    <div className='absolute z-5 text-white bottom-10 p-4'>
                                        <h3 className='text-xl font-semibold'>
                                            {location.placeName}
                                        </h3>
                                        <p>
                                            {location.peopleBorn} People Born So
                                            Fer
                                        </p>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default TopRatedSection;
