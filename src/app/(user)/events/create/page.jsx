"use client";
import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import loginImage from "../../../assets/create-event-illustration.svg";
import DropDown from "../../../components/Dropdown/Dropdown";
import Image from "next/image";
const hire = [
    {
        id: 1,
        name: "Yes",
    },
    {
        id: 2,
        name: "No",
    },
];
const services = [
    {
        id: 1,
        name: "Yes",
    },
    {
        id: 2,
        name: "No",
    },
];
const CreateEvent = () => {
    const onDateChange = () => {};
    const items = [
        {
            id: 0,
            name: "Dhaka",
        },
        {
            id: 1,
            name: "Tangail",
        },
        {
            id: 2,
            name: "Savar",
        },
        {
            id: 3,
            name: "Sirajganj",
        },
        {
            id: 4,
            name: "Manikgonj",
        },
    ];
    const [hireSelected, setHireSelected] = useState(hire[1]);
    const [servicesSelected, setServicesSelected] = useState(services[1]);
    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results);
    };

    const handleOnHover = (result) => {
        // the item hovered
        console.log(result);
    };

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item);
    };

    const handleOnFocus = () => {
        console.log("Focused");
    };

    const formatResult = (item) => {
        // return item;
        return (
            <>
                <span style={{ display: "block", textAlign: "left" }}>
                    {item.name}
                </span>
            </>
        );
    };

    return (
        <div>
            <div className='container mx-auto max-w-[1180px] px-4 lg:px-0 py-16'>
                <div className='flex flex-col lg:flex-row items-start justify-center'>
                    <div className='w-full lg:w-[537px] hidden lg:block'>
                        <div className='flex flex-col justify-center text-center'>
                            <h1 className='text-4xl text-black font-bold mb-4'>
                                Journey With Tourist
                                <span className='text-green'>Guide</span>
                            </h1>
                            <p className='mb-12'>
                                Our goal is to get to the place of your choice
                                very easily and let you enjoy the natural beauty
                                of Bangladesh.
                            </p>
                            <Image
                                src={loginImage}
                                className='w-auto h-auto'
                                alt=''
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col  text-left lg:text-center w-full '>
                            <div className='space-y-5 w-full lg:w-[473px] mx-auto'>
                                <div className='flex items-start'>
                                    <h1 className='text-2xl text-green font-bold '>
                                        Create Event
                                    </h1>
                                </div>
                                <form>
                                    <ul className='w-full lg:w-[473px] space-y-5 mx-auto'>
                                        <li className='flex flex-col items-start'>
                                            <label
                                                htmlFor='event_title '
                                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                            >
                                                Event Title
                                            </label>
                                            <input
                                                type='text'
                                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green hover:border-green text-black transition-all'
                                                placeholder='Event Title'
                                                required
                                                id='event_title'
                                            />
                                        </li>
                                        <li className='flex flex-col items-start'>
                                            <label
                                                htmlFor='event_descriptions '
                                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                            >
                                                Event Description
                                            </label>
                                            <textarea
                                                name=''
                                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green hover:border-green text-black transition-all'
                                                placeholder='Event Description'
                                                required
                                                id='event_descriptions'
                                                cols='30'
                                                rows='3'
                                            ></textarea>
                                        </li>
                                        <li className='flex flex-col items-start'>
                                            <label
                                                htmlFor='event_descriptions '
                                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                            >
                                                Event Cover
                                            </label>

                                            <input
                                                type='file'
                                                name=''
                                                id=''
                                                className='py-3 !px-4  w-full lg:w-[473px] lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green hover:border-green text-black transition-all'
                                            />
                                        </li>
                                        <li className='flex flex-col items-start'>
                                            <label
                                                htmlFor='contact '
                                                className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                            >
                                                Date
                                            </label>
                                            <RangeDatePicker
                                                startDate={new Date()}
                                                endDate={new Date()}
                                                onChange={(
                                                    startDate,
                                                    endDate
                                                ) =>
                                                    onDateChange(
                                                        startDate,
                                                        endDate
                                                    )
                                                }
                                                minDate={new Date(1900, 0, 1)}
                                                maxDate={new Date(2100, 0, 1)}
                                                startDatePlaceholder='Start Date'
                                                endDatePlaceholder='End Date'
                                                disabled={false}
                                                className='my-own-class-name !p-0  w-full lg:w-[473px] lg:px-0 border border-lightGray   outline-none focus:outline-none focus:border-green hover:border-green text-black transition-all'
                                                startWeekDay='monday'
                                            />
                                        </li>
                                        <li className='w-full'>
                                            <ul className='flex flex-row space-x-5'>
                                                <li className='flex flex-col items-start w-1/2'>
                                                    <label
                                                        htmlFor='event_people '
                                                        className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1"
                                                    >
                                                        Price
                                                    </label>
                                                    <input
                                                        type='number'
                                                        className='py-3 !px-4  w-full  lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green hover:border-green text-black transition-all'
                                                        placeholder='Price'
                                                        id='event_people'
                                                    />
                                                </li>
                                                <li className='flex flex-col items-start w-1/2'>
                                                    <label
                                                        htmlFor='place '
                                                        className="  text-start after:content-['*'] after:ml-0.5 after:text-red mb-1"
                                                    >
                                                        People
                                                    </label>
                                                    <input
                                                        type='number'
                                                        className='py-3 !px-4  w-full  lg:px-0 border border-mediumGray  outline-none focus:outline-none focus:border-green hover:border-green text-black transition-all'
                                                        placeholder='Price'
                                                        id='event_people'
                                                    />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='w-full'>
                                            <ul className='flex flex-row space-x-5'>
                                                <li className='flex flex-col items-start w-1/2'>
                                                    <label
                                                        htmlFor='destination '
                                                        className="  text-start after:content-['*'] after:ml-0.5 after:text-red mb-1"
                                                    >
                                                        Your Location
                                                    </label>

                                                    <div className='w-full'>
                                                        <ReactSearchAutocomplete
                                                            items={items}
                                                            onSearch={
                                                                handleOnSearch
                                                            }
                                                            onHover={
                                                                handleOnHover
                                                            }
                                                            onSelect={
                                                                handleOnSelect
                                                            }
                                                            onFocus={
                                                                handleOnFocus
                                                            }
                                                            autoFocus
                                                            id='destination'
                                                            formatResult={
                                                                formatResult
                                                            }
                                                            placeholder='Enter Location'
                                                        />
                                                    </div>
                                                </li>
                                                <li className='flex flex-col items-start w-1/2'>
                                                    <label
                                                        htmlFor='destination '
                                                        className="  text-start after:content-['*'] after:ml-0.5 after:text-red mb-1"
                                                    >
                                                        Destination
                                                    </label>
                                                    <div className='w-full'>
                                                        <ReactSearchAutocomplete
                                                            items={items}
                                                            onSearch={
                                                                handleOnSearch
                                                            }
                                                            onHover={
                                                                handleOnHover
                                                            }
                                                            onSelect={
                                                                handleOnSelect
                                                            }
                                                            onFocus={
                                                                handleOnFocus
                                                            }
                                                            autoFocus
                                                            formatResult={
                                                                formatResult
                                                            }
                                                            placeholder='Destination'
                                                        />
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className='w-full'>
                                            <ul className='flex flex-row space-x-5'>
                                                <li className='flex flex-col items-start w-1/2'>
                                                    <Listbox
                                                        value={hireSelected}
                                                        onChange={
                                                            setHireSelected
                                                        }
                                                        className='w-full'
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <div>
                                                                    <Listbox.Label className='block text-sm font-medium text-gray-700  mb-1'>
                                                                        Hire
                                                                        Guide
                                                                    </Listbox.Label>
                                                                </div>
                                                                <div className='mt-1 w-full relative '>
                                                                    <Listbox.Button className='relative w-full bg-white border border-mediumGray rounded-sm pl-4 pr-10 py-3.5 text-left cursor-default   sm:text-sm   outline-none focus:outline-none focus:border-green hover:border-green'>
                                                                        <span className='flex items-center'>
                                                                            <span className=' block truncate'>
                                                                                {
                                                                                    hireSelected.name
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
                                                                        show={
                                                                            open
                                                                        }
                                                                        as={
                                                                            Fragment
                                                                        }
                                                                        leave='transition ease-in duration-100'
                                                                        leaveFrom='opacity-100'
                                                                        leavehref='opacity-0'
                                                                    >
                                                                        <Listbox.Options className='absolute z-10 bg-white w-full max-h-56 rounded-sm py-1 text-base border border-mediumGray overflow-auto focus:outline-none sm:text-sm'>
                                                                            {hire.map(
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
                                                </li>
                                                <li className='flex flex-col items-start w-1/2'>
                                                    <Listbox
                                                        value={servicesSelected}
                                                        onChange={
                                                            setServicesSelected
                                                        }
                                                        className='w-full'
                                                    >
                                                        {({ open }) => (
                                                            <>
                                                                <div>
                                                                    <Listbox.Label className='block text-sm font-medium text-gray-700  mb-1'>
                                                                        Bus
                                                                        Services
                                                                    </Listbox.Label>
                                                                </div>
                                                                <div className='mt-1 w-full relative '>
                                                                    <Listbox.Button className='relative w-full bg-white border border-mediumGray rounded-sm pl-4 pr-10 py-3.5 text-left cursor-default   sm:text-sm   outline-none focus:outline-none focus:border-green hover:border-green'>
                                                                        <span className='flex items-center'>
                                                                            <span className=' block truncate'>
                                                                                {
                                                                                    servicesSelected.name
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
                                                                        show={
                                                                            open
                                                                        }
                                                                        as={
                                                                            Fragment
                                                                        }
                                                                        leave='transition ease-in duration-100'
                                                                        leaveFrom='opacity-100'
                                                                        leavehref='opacity-0'
                                                                    >
                                                                        <Listbox.Options className='absolute z-10 bg-white w-full max-h-56 rounded-sm py-1 text-base border border-mediumGray overflow-auto focus:outline-none sm:text-sm'>
                                                                            {services.map(
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
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <button
                                                type='submit'
                                                className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:w-[473px] lg:px-0 py-3'
                                            >
                                                Create Event
                                            </button>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;
