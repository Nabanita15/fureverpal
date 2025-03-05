'use client'
import React, {  useState } from 'react'
import wallpaper from "../../../public/images/wallpaperjpg.jpg"
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import axios from 'axios';
const page = () => {
    const [input,setInput]=useState({
      name:"",
      email:"",
      message:""
    });

    const handlechange=(e)=>{
        const {name,value}=e.target;
        setInput({
            ...input,
           [name]:value
        })
    }
    const submithandler=(e)=>{
        e.preventDefault();
        try {
            axios.post('http://localhost:3000/api/contact',input).then((res)=>{
                console.log('created successfully',res);
                if(res.data.msg){

                    alert("created successfully");
                    setInput({name:"",email:"",message:""})
                }else{
                    alert("fail to create");
                }
                
        }).catch((err)=>{console.log("data is not successfully created",err)          
        })
        } catch (error) {
            console.log("network error");
        }
    }
    return (
        <div>
            <div
                className="w-full h-[330px] backgroundcolor2 "
                style={{ backgroundImage: `url(${wallpaper.src})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="customContainer flex items-center h-fit justify-center pt-52 md:pt-[10rem] sm:pt-[11rem]" >
                    <h1 className='text-white z-40 font-bold text-4xl'>Contact
                    </h1>
                </div>
            </div>
            <div className='customContainer py-12 '>
                <div className='p-14 bg-lightgrey rounded-lg sm:p-6'>
                    <h1 className='text-4xl font-bold text-green text-center sm:text-xl'>Get in touch</h1>
                    <p className='pb-12 text-center px-60 font-medium pt-3 text-grey lg:px-16 md:px-2 sm:px-0'>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9482.002947563136!2d9.97687061738281!3d53.548828199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b161837e1813b9%3A0x4263df27bd63aa0!2sHamburg%2C%20Germany!5e0!3m2!1sen!2sin!4v1740123707691!5m2!1sen!2sin" width="100%" height="450" className='rounded-xl'></iframe>
                    <div className='flex gap-10 my-10 md:flex-col sm:flex-col sm:my-5'>
                        <form className='flex flex-col w-full gap-6' onSubmit={submithandler}>
                            <input type='text' value={input.name} name='name'  onChange={handlechange} placeholder='Your Name' className='py-3 px-4 rounded-xl font-medium focus:border-yellow focus:border-[2px] border-[2px]  border-transparent focus:outline-none' />
                            <input type='text' value={input.email} name='email'  onChange={handlechange} placeholder='Enter Your Email'  className='py-3 px-4 rounded-xl font-medium  focus:border-yellow focus:border-[2px] border-[2px]  border-transparent focus:outline-none' />
                            <textarea placeholder='Your Message'value={input.message} name='message'  onChange={handlechange} className='py-3 px-4 rounded-xl font-medium focus:border-yellow focus:border-[2px] border-[2px]  border-transparent focus:outline-none' rows={4}/>
                            <button type="submit" className='py-3 px-4 rounded-xl font-medium text-green border border-yellow bg-white hover:bg-yellow hover:text-white '>Submit</button>
                        </form>
                        <div className='w-[50rem] lg:w-[34rem] md:w-full sm:w-full flex gap-7 flex-col '>
                            <div className='bg-white flex gap-5 p-5 lg:p-6 rounded-xl'>
                                <MdLocationOn className='size-12 lg:size-8 text-green sm:size-7 '/>
                                <div>
                                    <h1 className='text-2xl font-semibold text-grey lg:text-xl sm:text-base'>Address</h1>
                                    <p className='text-gray-500 font-normal text-lg lg:text-base sm:text-xs'>123 Street New York.USA</p>
                                </div>
                            </div>
                            <div className='bg-white flex gap-5 p-5 lg:p-6  rounded-xl'>
                                <MdEmail className='size-10 lg:size-8 text-green sm:size-6'/>
                                <div>
                                    <h1 className='text-2xl font-semibold text-grey lg:text-xl sm:text-base'>Address</h1>
                                    <p className='text-gray-500 font-normal text-lg lg:text-base sm:text-xs'>info@example.com</p>
                                </div>
                            </div>
                            <div className='bg-white flex gap-5 p-5  lg:p-6 rounded-xl'>
                                <FaPhone className='size-10 lg:size-8 text-green sm:size-6'/>
                                <div>
                                    <h1 className='text-2xl font-semibold text-grey lg:text-xl sm:text-base'>Address</h1>
                                    <p className='text-gray-500 font-normal text-lg lg:text-base sm:text-xs'>(+012) 3456 7890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page