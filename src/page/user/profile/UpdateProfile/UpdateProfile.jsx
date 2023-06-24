import React, { useEffect, useRef, useState } from "react";
import selfee from "../../../../assets/svg/take-selfe.svg";
const UpdateProfile = () => {
    const [profilePicture, setProfilePicture] = useState();
    const [preview, setPreview] = useState();
    const fileRef = useRef();
    useEffect(() => {
        if (!profilePicture) {
            setPreview(undefined);
            return;
        }

        const objectUrl = URL.createObjectURL(profilePicture);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [profilePicture]);

    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setProfilePicture(undefined);
            return;
        }
        setProfilePicture(e.target.files[0]);
    };

    return (
        <div>
            <div className='container mx-auto max-w-[1180px] px-4 lg:px-6 py-8  relative '>
                <div>
                    <h1 className='text-2xl md:text-2xl font-medium'>
                        Edit Profile
                    </h1>
                    <p className='my-1 text-gray'>
                        Set up your Profile presence and following needs
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center mt-8 mb-4'>
                    <div className='flex flex-col space-y-10 w-full md:w-1/2'>
                        <h2 className='text-xl font-medium'>
                            Upload Your Profile Picture
                        </h2>
                        <div className='flex space-x-7 w-full items-center'>
                            <div className='rounded-full w-[120px] h-[120px] overflow-hidden  border-2 border-green '>
                                <img
                                    src={preview}
                                    alt=''
                                    className=' bg-center w-full h-auto  bg-contain '
                                />
                            </div>

                            <div className='flex flex-col space-y-1 '>
                                <button
                                    onClick={() => fileRef.current.click()}
                                    className='px-6 py-2 bg-green text-white hover:bg-black transition-all ease-linear delay-75 rounded'
                                >
                                    <input
                                        id='photo-upload'
                                        type='file'
                                        name='profilePicture'
                                        ref={fileRef}
                                        className='hidden'
                                        useRef='uploadProfilePicture'
                                        onChange={onSelectFile}
                                    />
                                    Upload Profile
                                </button>
                                <button
                                    className='px-6 py-2 bg-gray text-white hover:bg-black transition-all ease-linear delay-75 rounded'
                                    onClick={() => setProfilePicture(undefined)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                        <p className='text-gray'>
                            Please upload your profile picture as recommended
                            256*256px
                        </p>
                    </div>
                    <div className=' hidden md:block'>
                        <div className='flex flex-row justify-between w-96  px-6 py-3 glassmorphism '>
                            <div>
                                <h2 className='text-lg font-medium'>
                                    Take a Selfee!
                                </h2>
                                <p className='text-gray text-sm mt-1 -mr-8'>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Minus laboriosam fugit
                                    facere placeat, enim eveniet ea ab dolorum
                                    veniam.
                                </p>
                            </div>
                            <div className='w-[500px] -mt-32 -mb-24 -mr-16'>
                                <img src={selfee} alt='' className=' w-full ' />
                            </div>
                        </div>
                    </div>
                </div>
                <form action='' className='mt-10'>
                    {" "}
                    <ul className='  space-y-5'>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='name '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Name
                            </label>
                            <input
                                type='text'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='Name'
                                required
                                id='name'
                            />
                        </li>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='email '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Email
                            </label>
                            <input
                                type='email'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='Email'
                                required
                                id='email'
                            />
                        </li>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='email '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Description
                            </label>

                            <textarea
                                name='description'
                                id=''
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                cols='30'
                                rows='3'
                            ></textarea>
                        </li>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='location '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Location
                            </label>
                            <input
                                type='text'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='location'
                                required
                                id='location'
                                name='location'
                            />
                        </li>
                        <li className='flex flex-col items-start'>
                            <label
                                htmlFor='contact '
                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                            >
                                Contact Number
                            </label>
                            <input
                                type='text'
                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                placeholder='Contact Number'
                                required
                                id='contact'
                            />
                        </li>
                        <li>
                            <ul className='flex flex-row space-x-5'>
                                <li className='flex flex-col items-start'>
                                    <label
                                        htmlFor='food '
                                        className=' text-start  mb-1 block'
                                    >
                                        Favt. Food
                                    </label>
                                    <input
                                        type='text'
                                        className='py-3 !px-4  w-full  lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                        placeholder='Favt. Food'
                                        id='food'
                                    />
                                </li>
                                <li className='flex flex-col items-start'>
                                    <label
                                        htmlFor='place '
                                        className='  mb-1 block'
                                    >
                                        Favt. Place
                                    </label>
                                    <input
                                        type='text'
                                        className='py-3 !px-4  w-full  lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                        placeholder='Favt. Place'
                                        id='place'
                                    />
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button
                                type='submit'
                                className='bg-green text-white transition-all rounded-sm hover:bg-black px-8  py-3'
                            >
                                Register
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
