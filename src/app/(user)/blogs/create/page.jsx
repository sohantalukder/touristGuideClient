"use client";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { BiCloudUpload } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Background from "../../../../assets/feedback/main2.svg";
import DropDown from "@/components/Dropdown/Dropdown";
import Link from "next/link";
const categories = [
    {
        id: 1,
        name: "Tour Experience",
    },
    {
        id: 2,
        name: "Guiders",
    },
    {
        id: 3,
        name: "None",
    },
];
const privacy = [
    {
        id: 1,
        name: "Share Experience",
    },
    {
        id: 2,
        name: "Not Share",
    },
    {
        id: 3,
        name: "None",
    },
];

const ShareExperience = () => {
    const [categoriesSelected, setCategoriesSelected] = useState(categories[2]);
    const [privacySelected, setPrivacySelected] = useState(privacy[2]);

    const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);

    const onDragEnter = () => wrapperRef.current.classList.add("dragover");

    const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

    const onDrop = () => wrapperRef.current.classList.remove("dragover");

    const onFileDrop = (e) => {
        const newFile = e.target.files[0];
        if (newFile) {
            setFileList(newFile);
        }
    };

    return (
        <div>
            <div className='container mx-auto max-w-[1180px] !px-6 lg:px-0 py-16'>
                <h1 className='text-2xl md:text-3xl relative font-semibold pb-6 header'>
                    Feel free to drop your journey experiance and your journey
                    picture.
                </h1>
                <p className='mb-12'>
                    Our goal is to get to the place of your choice very easily
                    and let you enjoy the natural beauty of Bangladesh.
                </p>
                <div className='flex flex-col lg:flex-row space-x-0 lg:space-x-8 space-y-8 lg:space-y-8 items-center'>
                    <div className='w-full lg:w-1/2 mx-auto'>
                        <div className='w-full h-full flex items-center justify-center'>
                            <div
                                className=''
                                style={{
                                    backgroundImage: `url(${Background})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "cover",
                                }}
                            >
                                <div className=' p-12 lg:p-12  '>
                                    <div className='w-[full] max-h-[full] md:w-[416px] md:h-[416px] lg:w-[516px] lg:h-[516px] flex items-center justify-center bg-white shadow-custom rounded-xl'>
                                        {fileList.name ? (
                                            <p>{fileList.name}</p>
                                        ) : (
                                            <div
                                                ref={wrapperRef}
                                                className=' relative'
                                                onDragEnter={onDragEnter}
                                                onDragLeave={onDragLeave}
                                                onDrop={onDrop}
                                            >
                                                <div className='flex flex-col items-center text-center p-2.5'>
                                                    <BiCloudUpload className='text-9xl text-green' />

                                                    <p className='text-center'>
                                                        Drag & Drop your files
                                                        here
                                                    </p>
                                                </div>

                                                <input
                                                    type='file'
                                                    value=''
                                                    className='absolute top-0 left-0 w-full h-full cursor-pointer opacity-0'
                                                    onChange={onFileDrop}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 space-y-5 px-6'>
                        <div className='relative w-full lg:w-[473px] mx-auto'>
                            <h1 className='text-2xl border-b border-green font-semibold pb-1 after after:absolute after:w-32 after:h-[3px] after:bg-green after:-bottom-px after:left-0'>
                                <span className='px-2'>Options</span>
                            </h1>
                        </div>
                        <form className='space-y-5'>
                            <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                <li className='flex flex-col items-start'>
                                    <label
                                        htmlFor='email '
                                        className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                        placeholder='Your Name'
                                        required
                                    />
                                </li>
                                <li className='flex flex-col items-start relative'>
                                    <label
                                        htmlFor='Password '
                                        className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        name='message'
                                        id=''
                                        cols='30'
                                        rows='10'
                                        required
                                        placeholder='Your Message'
                                        className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green text-black transition-all'
                                    ></textarea>
                                </li>
                            </ul>
                            {/* Button */}
                            <div className='w-full lg:w-[473px] mx-auto'>
                                <div className='flex space-x-8 w-full'>
                                    <div className='w-1/2'>
                                        <Listbox
                                            value={categoriesSelected}
                                            onChange={setCategoriesSelected}
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Listbox.Label className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red mb-1">
                                                            Categories
                                                        </Listbox.Label>
                                                    </div>
                                                    <div className='mt-1 relative '>
                                                        <Listbox.Button className='relative w-full bg-white border border-mediumGray rounded-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none  sm:text-sm'>
                                                            <span className='flex items-center'>
                                                                <span className='ml-3 block truncate'>
                                                                    {
                                                                        categoriesSelected.name
                                                                    }
                                                                </span>
                                                            </span>
                                                            <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                                                <MdKeyboardArrowDown
                                                                    show={
                                                                        open
                                                                            ? `{className="rotate-180"}`
                                                                            : "rotate-0"
                                                                    }
                                                                    className='h-5 w-5 text-gray'
                                                                    aria-hidden='true'
                                                                />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave='transition ease-in duration-100'
                                                            leaveFrom='opacity-100'
                                                            leaveTo='opacity-0'
                                                        >
                                                            <Listbox.Options className='absolute z-10 bg-white w-full max-h-56 rounded-sm py-1 text-base border border-mediumGray overflow-auto focus:outline-none sm:text-sm'>
                                                                {categories.map(
                                                                    (
                                                                        category
                                                                    ) => (
                                                                        <DropDown
                                                                            category={
                                                                                category
                                                                            }
                                                                            key={
                                                                                category.id
                                                                            }
                                                                        />
                                                                    )
                                                                )}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>
                                    </div>
                                    <div className='w-1/2'>
                                        <Listbox
                                            value={privacySelected}
                                            onChange={setPrivacySelected}
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Listbox.Label className="block text-sm font-medium text-gray-700 after:content-['*'] after:ml-0.5 after:text-red mb-1">
                                                            Privacy
                                                        </Listbox.Label>
                                                    </div>
                                                    <div className='mt-1 relative'>
                                                        <Listbox.Button className='relative w-full bg-white border border-mediumGray rounded-sm pl-3 pr-10 py-3 text-left cursor-default focus:outline-none  sm:text-sm'>
                                                            <span className='flex items-center'>
                                                                <span className='ml-3 block truncate'>
                                                                    {
                                                                        privacySelected.name
                                                                    }
                                                                </span>
                                                            </span>
                                                            <span className='ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'>
                                                                <MdKeyboardArrowDown
                                                                    show={
                                                                        open
                                                                            ? `{className="rotate-180"}`
                                                                            : "rotate-0"
                                                                    }
                                                                    className='h-5 w-5 text-gray'
                                                                    aria-hidden='true'
                                                                />
                                                            </span>
                                                        </Listbox.Button>

                                                        <Transition
                                                            show={open}
                                                            as={Fragment}
                                                            leave='transition ease-in duration-100'
                                                            leaveFrom='opacity-100'
                                                            leaveTo='opacity-0'
                                                        >
                                                            <Listbox.Options className='absolute z-10 bg-white w-full max-h-56 rounded-sm py-1 text-base border border-mediumGray overflow-auto focus:outline-none sm:text-sm'>
                                                                {privacy.map(
                                                                    (
                                                                        category
                                                                    ) => (
                                                                        <DropDown
                                                                            category={
                                                                                category
                                                                            }
                                                                            key={
                                                                                category.id
                                                                            }
                                                                        />
                                                                    )
                                                                )}
                                                            </Listbox.Options>
                                                        </Transition>
                                                    </div>
                                                </>
                                            )}
                                        </Listbox>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-[473px] mx-auto'>
                                <button
                                    type='submit'
                                    className='px-6 py-2.5 bg-green text-white hover:bg-black transition-all'
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                        <p className='w-full lg:w-[473px] mx-auto font-semibold'>
                            Having Problem{"?  "}
                            <Link
                                href='/contact'
                                className='text-green hover:underline'
                            >
                                Contact Us
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareExperience;
