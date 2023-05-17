import React from "react";
import nikli from "../../assets/galary/iamge-2.jpg";
import {
    default as Mowa,
    default as Sajek,
} from "../../assets/galary/image-3.jpg";
import Bandarban from "../../assets/galary/image-4.jpg";
import Mangrove from "../../assets/galary/nikli.jpg";
import Item from "./Item";
const TopTending = () => {
    const topRatedPlace = [
        {
            name: "Nikli Hoar, Kishoregonj",
            description: `A boat ride on the double clear water
            of Haor, an island-like villagein the
            middle of the water,a small water
            forest likeRatargul, eatingfresh
            fish from Haor.`,
            image: nikli,
        },
        {
            name: "Mangrove, Satkhira",
            description: `A boat ride on the double clear water
            of Haor, an island-like villagein the
            middle of the water,a small water
            forest likeRatargul, eatingfresh
            fish from Haor.`,
            image: Mangrove,
        },
        {
            name: "Mowa, Munshiganj",
            description: `A boat ride on the double clear water
            of Haor, an island-like villagein the
            middle of the water,a small water
            forest likeRatargul, eatingfresh
            fish from Haor.`,
            image: Mowa,
        },
        {
            name: "Bandarban, Bandarban",
            description: `A boat ride on the double clear water
            of Haor, an island-like villagein the
            middle of the water,a small water
            forest likeRatargul, eatingfresh
            fish from Haor.`,
            image: Bandarban,
        },
        {
            name: "Sajek, Kagrachori",
            description: `A boat ride on the double clear water
            of Haor, an island-like villagein the
            middle of the water,a small water
            forest likeRatargul, eatingfresh
            fish from Haor.`,
            image: Sajek,
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
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {topRatedPlace.map((item) => (
                    <Item key={item.name} item={item} />
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='btn-green mt-10'>View All</button>
            </div>
        </div>
    );
};

export default TopTending;
