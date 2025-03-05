import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";
import { ImLinkedin2 } from "react-icons/im";
import { PiPawPrintFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='bg-[#45595b]'>
            <div className='customContainer py-16'>
                <div className='flex justify-between gap-5 border-b border-yellow pb-7 lg:gap-12 sm:flex-col'>
                    <div className='text-5xl text-green font-bold flex justify-center lg:text-3xl md:text-2xl sm:text-3xl items-center'>
                    FurEverP<PiPawPrintFill />ls
                    </div>
                    <div className="relative w-[600px] sm:w-full">
                        <input type="search" className=" w-full rounded-3xl px-6 py-3  focus:outline-none boxShadow  text-xl  lg:text-lg lg:py-2 md:py-2 md:text-base sm:text-sm sm:py-2 " placeholder="Search" />
                        <button className="absolute  rounded-3xl px-5 py-3 bg-green top-0 right-0  text-white font-semibold cursor-pointer text-xl lg:text-lg md:text-base lg:py-2 md:py-2 hover:bg-yellow boxShadow  sm:text-sm sm:py-2  ">Submit Now</button>
                    </div>
                    <ul className='flex gap-5 items-center sm:justify-center'>
                        <li className='text-xl lg:text-lg text-yellow border border-yellow rounded-full p-3 lg:p-2 md:p-2 md:text-base sm:text-base sm:p-2'><FaTwitter /></li>
                        <li className='text-xl lg:text-lg text-yellow border border-yellow rounded-full p-3 lg:p-2 md:p-2 md:text-base sm:text-base sm:p-2'><RiFacebookFill /></li>
                        <li className='text-xl lg:text-lg text-yellow border border-yellow rounded-full p-3 lg:p-2 md:p-2 md:text-base sm:text-base sm:p-2'><ImLinkedin2 /></li>
                    </ul>
                </div>
                <div className='grid grid-cols-4 gap-6 py-7 lg:gap-4 text-white md:grid-cols-2 sm:grid-cols-1'>
                    <ul>
                        <li className='text-2xl font-bold text-white lg:text-xl  sm:text-'>Why People Like us!</li>
                        <li className='text-gray-300 leading-10 font-medium lg:leading-7'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</li>
                        <button className='text-lg text-green font-medium px-4 py-1 lg:text-base rounded-3xl border border-yellow mt-4 lg:text- md:text- sm:text-'>Read More</button>
                    </ul>
                    <ul className='text-gray-300  font-medium flex gap-2 lg:gap-1 flex-col md:text- md:flex-wrap'>
                        <li className='text-2xl font-bold text-white lg:text-xl md:text- sm:text-'>Shop Info</li>
                        <li> About Us</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                        <li>Return Policy</li>
                        <li>FAQs & Help</li>
                    </ul>
                    <ul className='text-gray-300  font-medium flex gap-2 lg:gap-1 flex-col'>
                        <li className='text-2xl font-bold text-white lg:text-xl md:text- sm:text-'>My Account</li>
                        <li>Shop details</li>
                        <li>Shopping Cart</li>
                        <li>Wishlist</li>
                        <li>Order History</li>
                        <li>International Orders</li>
                    </ul>
                    <ul className='text-gray-300  font-medium flex gap-2 lg:gap-1 flex-col'>
                        <li className='text-2xl font-bold text-white lg:text-xl md:text- sm:text-'>Contact</li>
                        <li className=''>Address: 1429 Netus Rd, NY 48247</li>
                        <li className=''>Email: Example@gmail.com</li>
                        <li className=''>Phone: +0123 4567 8910</li>
                        <li className=''>Payment Accepted</li>
                    </ul>
                </div>
                <h1 className='text-white font-medium text-center lg:text-base md:text- sm:text-'>Thank you for visiting my page@ </h1>
            </div>
        </div>
    )
}

export default Footer