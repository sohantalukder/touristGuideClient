import React from "react";

const NavigationProfile = (props) => {
    return (
        <div className='my-5 w-full flex gap-5 flex-wrap'>
            <button
                onClick={() => props.setShow(false)}
                className=' py-2 px-6 bg-green hover:bg-greenLight transition-all ease-in-out delay-75 text-white rounded-full'
            >
                Edit Profile
            </button>
            <button
                onClick={() => props.setShow(true)}
                className=' py-2 px-6 bg-green hover:bg-greenLight transition-all ease-in-out delay-75 text-white rounded-full'
            >
                Change Password
            </button>
        </div>
    );
};

export default NavigationProfile;
