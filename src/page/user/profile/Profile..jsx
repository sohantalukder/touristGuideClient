import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import ChangePassword from "./UpdateProfile/ChangePassword";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Image from "../../../components/image/Image";
import { useSelector } from "react-redux";
const Profile = () => {
    const { user } = useSelector((state) => state.auth) || {};
    const { name, image, description, location, fvtFoods } = user || {};
    const [show, setShow] = useState(false);
    return (
        <div>
            <div className='container mx-auto max-w-[1180px] !px-6 py-8 md:py-12 lg:py-16 relative'>
                <div className=''>
                    <div className='flex gap-10 flex-col items-center  lg:items-start lg:flex-row'>
                        <div className='md:w-40 h-auto overflow-hidden flex items-center '>
                            <Image
                                src={image}
                                alt={name}
                                className={{
                                    objectFit: "cover",
                                    objectCover: "center",
                                    borderRadius: "9999px",
                                }}
                            />
                        </div>
                        <div>
                            <h1 className='text-2xl md:text-3xl font-semibold'>
                                {name}
                            </h1>
                            <p className='flex items-center text-gray my-1'>
                                <span className='mr-2 text-xl'>
                                    <MdLocationOn />
                                </span>{" "}
                                {location}
                            </p>
                            <p className='text-start lg:text-center md:!text-left'>
                                {description}
                            </p>
                            {fvtFoods?.length > 0 && (
                                <div className='flex flex-row space-x-4 my-2'>
                                    {fvtFoods.map((item, index) => {
                                        return (
                                            <p
                                                key={index}
                                                className='px-3 py-1 bg-lightGray text-gray'
                                            >
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            )}

                            <div className='my-5 w-full flex gap-5 flex-wrap'>
                                <button
                                    onClick={() => setShow(false)}
                                    className=' py-2 px-6 bg-green hover:bg-greenLight transition-all ease-in-out delay-75 text-white rounded-full'
                                >
                                    Edit Profile
                                </button>
                                <button
                                    onClick={() => setShow(true)}
                                    className=' py-2 px-6 bg-green hover:bg-greenLight transition-all ease-in-out delay-75 text-white rounded-full'
                                >
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-start !items-center md:!items-start'>
                        {!show ? <UpdateProfile /> : <ChangePassword />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
