'use client';
import React, { useEffect, useState } from 'react';
import wallpaper from "../../../public/images/wallpaperjpg.jpg";
import { PiPawPrintFill } from 'react-icons/pi';
import Link from 'next/link';
import axios from 'axios';
import {useRouter}from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const Page = ({ params }) => {
  const [routes, setRoute] = useState('signup');
  const { slug } = React.use(params); // Unwrap params using React.use()
  const router=useRouter();
  const [formdata, setFormdata] = useState({
    name: "", // Ensure initial values are defined
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value
    });
  };

  useEffect(() => {
    if (slug) {
      setRoute(slug);
    }
  }, [slug]);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/signup', formdata);
      console.log("Successfully created", res.data);
      toast.success("Successfully created")
      setFormdata({ name: "", email: "", password: "" });
      router.push("/login");
    } catch (error) {
      toast.error("Error creating account", error);
    }

  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', formdata);
      console.log("Successfully created123", res.data);
      toast.success("Successfully login")
      localStorage.setItem("token",res.data.token)
      setFormdata({ name: "", email: "", password: "" });
      router.push("/cart");
    } catch (error) {
      toast.error( error.response.data.msg)
      console.log("Account is not login successfully", error.response.data.msg);
    }
  };
  return (
    <div>
      <div
        className="w-full h-screen backgroundcolor2 flex justify-center items-center"
        style={{ backgroundImage: `url(${wallpaper.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='customContainer z-20 flex justify-center items-center'>
          <div className='bg-white w-[470px]  rounded-2xl border-2 border-white p-10 sm:p-6 lg:p-8 xl:p-9 '>
            <div className='text-green text-5xl font-extrabold lg:text-3xl md:text-4xl sm:text-2xl flex justify-center'>
              FurEverP<PiPawPrintFill />ls
            </div>

            <h1 className='text-3xl text-center font-bold text-yellow cursor-pointer pt-2 sm:text-xl'>
              {routes === 'signup' ? 'Signup' : routes}
            </h1>

            {routes === 'signup' ? (
              <form onSubmit={handlesubmit} className='flex flex-col gap-5 py-10 sm:py-3 lg:gap-4 lg:py-5 '>
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={formdata.name || ""} 
                  onChange={handleChange}
                  className="w-full rounded-3xl px-6 py-3 focus:outline-yellow focus:outline-2 boxShadow border-yellow border-2 sm:text-xs"
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={formdata.email || ""} 
                  onChange={handleChange}
                  className="w-full rounded-3xl px-6 py-3 focus:outline-yellow focus:outline-2 boxShadow border-yellow border-2 sm:text-xs"
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formdata.password || ""} 
                  onChange={handleChange}
                  className="w-full rounded-3xl px-6 py-3 focus:outline-yellow focus:outline-2 boxShadow border-yellow border-2 sm:text-xs"
                />
                <button type='submit' className="rounded-3xl px-6 py-3 bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow sm:text-xs">
                  Signup
                </button>
                <p className='text-lg text-center font-medium cursor-pointer text-grey  sm:text-base'>
                  Already have an account? <Link href={"/login"} className='underline hover:text-yellow'>login</Link>
                </p>
              </form>
            ) : (
              <form onSubmit={handleLogin} className='flex flex-col gap-5 py-10'>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={formdata.email || ""}
                  onChange={handleChange}
                  className="w-full rounded-3xl px-6 py-3 focus:outline-yellow focus:outline-2 boxShadow border-yellow border-2 sm:text-xs"
                />
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={formdata.password}
                  onChange={handleChange}
                  className="w-full rounded-3xl px-6 py-3 focus:outline-yellow focus:outline-2 boxShadow border-yellow border-2 sm:text-xs"
                />
                <button className="rounded-3xl px-6 py-3 bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow sm:text-xs">
                  Login
                </button>
                <p className='text-lg text-center font-medium cursor-pointer text-grey sm:text-base'>
                  Create your account? <Link href={"/signup"} className='underline hover:text-yellow'>Signup</Link>
                </p>
              </form>
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Page;