import React, { useState } from "react";
import { MdLocationOn } from "react-icons/md";
import ChangePassword from "./UpdateProfile/ChangePassword";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import Image from "../../../components/image/Image";
import { useSelector } from "react-redux";
import NavigationProfile from "./NavigationProfile";
import FavFood from "./FavFood";
import SEO from "../../../utils/seo/SEO";
import { ReactComponent as DefaultImage } from "../../../assets/svg/user.svg";
const Profile = () => {
    const { preference } = useSelector((state) => state.preference) || {};
    const { user } = useSelector((state) => state.auth) || {};
    const { name, image, description, location, fvtFoods } = user || {};
    const [show, setShow] = useState(false);
    console.log(image);
    return (
        <>
            <SEO
                title='Profile'
                description={preference?.website_description}
                name={preference?.website_name}
                type={preference?.website_keywords}
            />
            <div className='container mx-auto max-w-[1180px] !px-6 py-8 md:py-12 lg:py-16 relative'>
                <div className='flex gap-10 flex-col items-center  lg:items-start lg:flex-row'>
                    <div
                        className={`w-40 h-40 rounded-full overflow-hidden flex items-center ${
                            !image && "bg-mediumGray"
                        }`}
                    >
                        {image ? (
                            <Image
                                src={image}
                                alt={name}
                                className={{
                                    objectFit: "cover",
                                    objectCover: "center",
                                    borderRadius: "9999px",
                                }}
                            />
                        ) : (
                            <DefaultImage height='120' width='200' />
                        )}
                    </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl font-semibold'>
                            {name}
                        </h1>
                        {location && (
                            <p className='flex items-center text-gray my-1'>
                                <span className='mr-2 text-xl'>
                                    <MdLocationOn />
                                </span>{" "}
                                {location}
                            </p>
                        )}
                        <p className='text-start lg:text-center md:!text-left'>
                            {description}
                        </p>
                        {fvtFoods?.length > 0 && (
                            <FavFood fvtFoods={fvtFoods} />
                        )}

                        <NavigationProfile setShow={setShow} />
                    </div>
                </div>
                <div className='flex flex-col justify-start !items-center md:!items-start'>
                    {!show ? <UpdateProfile /> : <ChangePassword />}
                </div>
            </div>
        </>
    );
};

export default Profile;
