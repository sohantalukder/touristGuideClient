/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTopGuidersMutation } from "../../../../../redux/slice/guiders/topGuidersApi";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import Image from "../../../../../components/image/Image";
import Skeleton from "../../../../../utils/skeleton/Skeleton";
import StarRating from "../../../../../components/star-rating/StarRating";
import RenderItem from "./RenderItem";

const TopGuiders = () => {
    const [topGuiders, { isLoading, error }] = useTopGuidersMutation();
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const getData = async () => {
        const result = await topGuiders();
        const { records, status } = result?.data?.response || {};
        console.log(records);
        if (status?.code === 200) {
            return setData(records?.guiders);
        } else {
            toast.error(error || status?.message);
        }
    };
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            getData();
        }
        return () => (isMounted = false);
    }, [dispatch]);
    return isLoading ? (
        <div className='container max-w-[1180px] mx-auto my-16'>
            <div className='mySwiper flex justify-between h-[300px]'>
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    ) : (
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
                    {data?.map((guider, index) => {
                        return (
                            <SwiperSlide
                                key={index}
                                className=' relative border border-mediumGray '
                            >
                                <RenderItem guider={guider} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default TopGuiders;
