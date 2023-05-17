"use client";
import React from "react";
import { Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image from "../../assets/social-intractions/image-1.png";
import quota from "../../assets/social-intractions/quota.svg";
import Image from "next/image";
const Testimonials = () => {
    const testimonials = [
        {
            quota: quota,
            message: `The rules for using quotation marks around
            a single word for emphasis have changed
            since people began using word processors
            for their writing. If a word needs to be
            emphasized but is not being quoted.`,
            name: "Musfiqur Rahman",
            image: image,
        },
        {
            quota: quota,
            message: `The rules for using quotation marks around
            a single word for emphasis have changed
            since people began using word processors
            for their writing. If a word needs to be
            emphasized but is not being quoted.`,
            name: "Musfiqur Rahman",
            image: image,
        },
        {
            quota: quota,
            message: `The rules for using quotation marks around
            a single word for emphasis have changed
            since people began using word processors
            for their writing. If a word needs to be
            emphasized but is not being quoted.`,
            name: "Musfiqur Rahman",
            image: image,
        },
        {
            quota: quota,
            message: `The rules for using quotation marks around
            a single word for emphasis have changed
            since people began using word processors
            for their writing. If a word needs to be
            emphasized but is not being quoted.`,
            name: "Musfiqur Rahman",
            image: image,
        },
        {
            quota: quota,
            message: `The rules for using quotation marks around
            a single word for emphasis have changed
            since people began using word processors
            for their writing. If a word needs to be
            emphasized but is not being quoted.`,
            name: "Musfiqur Rahman",
            image: image,
        },
    ];
    return (
        <div className='bg-black'>
            <div className='container mx-auto max-w-[1180px] py-16 text-white'>
                <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                    People Talking About Us
                </h1>
                <p className='mb-12'>
                    Our goal is to get to the place of your choice very easily
                    and let you enjoy the natural beauty of Bangladesh.
                </p>
                <div className='flex justify-center'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={40}
                        loop={true}
                        navigation={true}
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
                        modules={[Autoplay, Navigation]}
                        className='mySwiper flex justify-between'
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide className='flex flex-col items-center'>
                                <div className='px-9 pt-5 pb-14 bg-white text-black flex flex-col items-center'>
                                    <Image src={testimonial.quota} alt='' />
                                    <p className='mt-4 text-center'>
                                        {testimonial.message}
                                    </p>
                                </div>
                                <div className='-mt-7 flex flex-col items-center'>
                                    <Image src={testimonial.image} alt='' />
                                    <p className='mt-3'>{testimonial.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
