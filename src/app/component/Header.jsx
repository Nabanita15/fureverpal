"use client"
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { createCart } from '../component/CartContext'
import { PiPawPrintFill } from "react-icons/pi";

const Header = () => {
  const pathname = usePathname()
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState("false");
  const [menu,setmenu] =useState("false");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setScrollDirection('Scrolling down');
      } else {
        setScrollDirection('Scrolling up');
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);

      if (currentScrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [lastScrollTop]);

  const handleShow = () => {
    setShow(prev => !prev)
  }
  
  const handleMenu=()=>{
    setmenu(prev => !prev)
  }
  const { count } = useContext(createCart);

  return (
    <div className={`bg-white flex flex-col justify-center  fixed w-full  z-50 ${isScrolled ? ' shadow-2xl' : 'bg-transparent'}`}>
      <div className={`bg-green flex justify-between customContainer sm:hidden rounded-tl-[60px] rounded-bl-2xl rounded-tr-2xl rounded-br-[60px] px-8 py-3 text-white text-sm font-sans md:hidden ${isScrolled ? "hidden scroll-smooth duration-100 transition-ease " : "block"}`}>
        <ul className='flex gap-4'>
          <li className='flex gap-2 items-center md:text-xs'> <FaLocationDot className='text-yellow' />
            #123 offStreets,New york</li>
          <li className='flex gap-2 items-center md:text-xs'><MdEmail className='text-yellow' />
            fruitable@gmail.com</li>
        </ul>
        <ul className='flex gap-4'>
          <li className="hover:text-yellow cursor-pointer">Privacy Policy /</li>
          <li className="hover:text-yellow cursor-pointer">Terms of Use /</li>
          <li className="hover:text-yellow cursor-pointer">Sales and Refunds /</li>

        </ul>
      </div>

      <div className='flex justify-between py-6 customContainer cursor-pointer md:py-4'>
        <div className='text-green text-5xl font-extrabold lg:text-3xl md:text-4xl sm:text-xl flex'>FurEverP<PiPawPrintFill />ls</div>
        <ul className='flex gap-5 items-center text-lg font-medium text-grey sm:hidden'>
          <li className={`hover:text-green  md:text-base ${pathname == "/" ? "text-green" : ""}`}><Link href="/">Home </Link></li>
          <li className={`hover:text-green  md:text-base relative${pathname == "/shopDetail" ? "text-green" : ""}`}><Link href="#">Shop Detail</Link></li>
          <li className={`hover:text-green  md:text-base ${pathname == "/contact" ? "text-green" : ""}`}><Link href="/contact">Contact</Link></li>
        </ul>

        {!show ? <div className='relative '>
          <ul className=' absolute flex gap-5 items-center flex-col text-sm bg-white font-medium text-grey  top-10  w-[430px] left-[-212px] p-4'>
            <li className={`hover:text-green  md:text-base cursor-pointer  ${pathname == "/" ? "text-green" : ""}`} onClick={() => handleShow()}><Link href="/">Home </Link></li>
            <li className={`hover:text-green  md:text-base cursor-pointer  ${pathname == "/shopDetail" ? "text-green" : ""}`} onClick={() => handleShow()}><Link href="#">Shop Detail</Link></li>
            <li className={`hover:text-green  md:text-base  cursor-pointer ${pathname == "/contact" ? "text-green" : ""}`} onClick={() => handleShow()}><Link href="/contact">Contact</Link></li>
          </ul>
        </div> :
          <div className='hidden'> </div>}
        <ul className='flex gap-5 items-center  font-semibold text-green sm:gap-3 '>
          <li className='rounded-full p-2 border border-yellow hover:bg-yellow md:text-sm text-2xl sm:text-base sm:p-1 lg:text-2xl md:p-1 lg:p-2'><FaSearch /></li>
          <li className='md:text-xl text-4xl sm:text-lg  lg:text-3xl flex'><Link href={"/cart"}><FaCartShopping /></Link><span className='bg-yellow text-base w-[25px] h-[25px] sm:w-[20px] sm:h-[20px] sm:text-sm flex justify-center items-center text-white rounded-full'>{count}</span></li>
          <li className='md:text-xl text-4xl sm:text-lg  lg:text-3xl relative' onClick={()=>handleMenu()}><FaUser />
          {
            menu ?  
          <div className='hidden'></div>:
          <ul className='bg-white p-5  absolute right-0 text-lg text-black top-[4.2rem] shadow-lg rounded-sm'>
            <li className='hover:text-yellow'><Link href={"/signup"}>Signup</Link></li>
            <li className='hover:text-yellow'><Link href={"/login"}>Login</Link></li>
            <li className='hover:text-yellow'><Link href={"/logout"}>Logout</Link></li>
          </ul>
          }
           </li>
          <MdMenu className='text-green hidden sm:block text-4xl sm:text-xl' onClick={() => handleShow('true')} />
        </ul>
      </div>
    </div>
  )
}

export default Header
