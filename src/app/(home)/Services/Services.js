import React from "react";
import { CgSupport } from "react-icons/cg";
import { GiCrossroad } from "react-icons/gi";
import { MdManageSearch, MdOutlineFastfood } from "react-icons/md";
import { RiBusWifiFill, RiHotelLine } from "react-icons/ri";
import Service from "./Service";
const Services = () => {
    const services = [
        {
            name: "Food",
            image: MdOutlineFastfood,
            total: 1920,
        },
        {
            name: "Famous Place",
            image: MdManageSearch,
            total: 1920,
        },
        {
            name: "Hotel",
            image: RiHotelLine,
            total: 1920,
        },
        {
            name: "Way of Road",
            image: GiCrossroad,
            total: 1920,
        },
        {
            name: "Guiders",
            image: CgSupport,
            total: 1920,
        },
        {
            name: "Bus",
            image: RiBusWifiFill,
            total: 1920,
        },
    ];
    return (
        <div className='container max-w-[1180px] mx-auto my-16 '>
            <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                Find Our Services
            </h1>
            <p className='mb-12'>
                Our goal is to get to the place of your choice very easily and
                let you enjoy the natural beauty of Bangladesh.
            </p>
            <div className=' grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                {services.map((service) => (
                    <Service key={service.name} service={service} />
                ))}
            </div>
        </div>
    );
};

export default Services;
