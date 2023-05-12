import React from "react";
import { MdLocationOn, MdMarkEmailUnread, MdPhoneIphone } from "react-icons/md";
const Contact = () => {
    return (
        <div>
            <div className='container mx-auto !px-6 mt-16 mb-16 max-w-[1180px] flex flex-col md:flex-row gap-5'>
                {/* Get In Touch */}
                <div className='flex flex-col justify-start  w-full md:w-1/2'>
                    <h1 className='mb-2 uppercase text-3xl md:text-4xl lg:text-5xl font-bold'>
                        Get In Touch
                    </h1>
                    <p className='text-gray'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Quis adipiscing proin velit vitae tincidunt. Vestibulum
                        consectetur nibh commodo amet diam nibh. Quisque
                        phasellus elit enim senectus. Faucibus commodo tortor,
                        volutpat in hac pulvinar sollicitudin. Enim vitae quam
                        ultrices turpis ornare fringilla mus habitasse.
                    </p>
                    <div className='space-y-5 mt-7'>
                        <div className='flex space-x-2 items-center'>
                            <MdMarkEmailUnread className='text-xl' />
                            <a href='mail:touristGuide@gmail.com'>
                                touristGuide@gmail.com
                            </a>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <MdPhoneIphone className='text-xl' />
                            <a href='tel:01865748726'>+01865748726</a>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <MdLocationOn className='text-xl' />
                            <p>Mirpur-2, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center w-full md:w-1/2 px-0 sm:px-6 md:px-10'>
                    <div className='bg-white shadow-lg px-8 py-12 w-full'>
                        <h2 className='text-xl md:text-2xl text-black font-bold text-center mb-5'>
                            Say Something
                        </h2>
                        <form className=' space-y-5'>
                            <ul className=' space-y-5 mx-auto'>
                                <li className='flex flex-col items-start'>
                                    <label
                                        htmlFor='name'
                                        className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                        type='text'
                                        className='py-3 !px-4  w-full lg:px-0 border border-mediumGray bg-white outline-none focus:outline-none focus:border-green text-black transition-all'
                                        placeholder='Your Name'
                                        required
                                        id='name'
                                    />
                                </li>
                                <li className='flex flex-col items-start'>
                                    <label
                                        htmlFor='email'
                                        className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                    >
                                        Your Email
                                    </label>
                                    <input
                                        type='email'
                                        className='py-3 !px-4  w-full lg:px-0 border border-mediumGray bg-white outline-none focus:outline-none focus:border-green text-black transition-all'
                                        placeholder='Your Email'
                                        required
                                        id='email'
                                    />
                                </li>
                                <li className='flex flex-col items-start'>
                                    <label
                                        htmlFor='email'
                                        className=" text-start after:content-['*'] after:ml-0.5 after:text-red mb-1 block"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        name='message'
                                        id='message'
                                        cols='30'
                                        rows='10'
                                        placeholder='Message'
                                        className='py-3 !px-4  w-full lg:px-0 border border-mediumGray bg-white outline-none focus:outline-none focus:border-green text-black transition-all'
                                    ></textarea>
                                </li>
                            </ul>

                            <button
                                type='submit'
                                className='bg-green text-white transition-all rounded-sm hover:bg-black px-6 w-full lg:px-0 py-3'
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
