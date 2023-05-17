import React from "react";
import shareImage from "../../assets/desination-full/destination.png";
import userImage from "../../assets/social-intractions/image-5.png";
import History from "./History";
const ShareHistory = () => {
    const shareHistory = [
        {
            name: "Sharmin Jahan",
            location: "Lalbag",
            shareImage: shareImage,
            userImage: userImage,
            message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
        },
        {
            name: "Sharmin Jahan",
            location: "Lalbag",
            shareImage: shareImage,
            userImage: userImage,
            message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
        },
        {
            name: "Sharmin Jahan",
            location: "Lalbag",
            shareImage: shareImage,
            userImage: userImage,
            message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
        },
        {
            name: "Sharmin Jahan",
            location: "Lalbag",
            shareImage: shareImage,
            userImage: userImage,
            message: `Subahdar Muhammad Azam Shah Lalbagh Fort (also Fort Aurangabad) is an incomplete 17th-century Mughal fort complex that stands before the Buriganga River in the southwestern part of Dhaka, Bangladesh.`,
        },
    ];
    return (
        <div className='container mx-auto max-w-[1180px] my-16'>
            <h1 className='text-2xl md:text-4xl relative font-semibold pb-6 header'>
                People Share Visited Stroy
            </h1>
            <p className='mb-12'>
                Our goal is to get to the place of your choice very easily and
                let you enjoy the natural beauty of Bangladesh.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
                {shareHistory.map((history) => (
                    <History history={history} key={history.name} />
                ))}
            </div>
            <div className='flex items-center justify-center mt-9'>
                <button className='px-6 py-2 bg-green text-white hover:bg-darkBlack transition-all'>
                    View More
                </button>
            </div>
        </div>
    );
};

export default ShareHistory;
