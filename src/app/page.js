'use client'
import Image from "next/image";
import wallpaper from "../../public/images/wallpaperjpg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCarSide } from "react-icons/fa";
import { FaUserShield } from "react-icons/fa6";
import { LuArrowLeftRight } from "react-icons/lu";
import { ImPhone } from "react-icons/im";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { GrServices } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { MdOutlineEventAvailable } from "react-icons/md";
import { FaQuoteRight } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { createCart } from "./component/CartContext";

const shipping = [
  {
    logo: <FaCarSide size={60} />,
    title: "Free Shipping",
    detail: "Free on order over $300"
  },
  {
    logo: <FaUserShield size={60} />,
    title: "Security Payment",
    detail: "100% security payment"
  },
  {
    logo: <LuArrowLeftRight size={60} />,
    title: "30 Day Return",
    detail: "30 day money guarantee"
  },
  {
    logo: <ImPhone size={60} />,
    title: "24/7 Support",
    detail: "Support every time fast"
  },
]

const organic = [
  {
    productImage: "/images/clothes3.webp",
    topic: "Clothes",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "4.99 "
  },
  {
    productImage: "/images/food2.webp",
    topic: "Food",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "2.00 "
  },
  {
    productImage: "/images/product.jpg",
    topic: "Toys",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "7.99 "
  },
  {
    productImage: "/images/clothes2.jpg",
    topic: "Clothes",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "45.29 "
  },
  {
    productImage: "/images/food2.webp",
    topic: "Food",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "8.99 "
  },
  {
    productImage: "/images/product4.webp",
    topic: "Toys",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "4.00 "
  },
  {
    productImage: "/images/food2.webp",
    topic: "Food",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "12.9 "
  },
  {
    productImage: "/images/product5.webp",
    topic: "Food",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "4.49 "
  },
  {
    productImage: "/images/food5.webp",
    topic: "Food",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "9.99 "
  }, {
    productImage: "/images/toy.webp",
    topic: "Toys",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "2.99 "
  }, {
    productImage: "/images/toys2.jpg",
    topic: "Toys",
    product: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    price: "4.49 "
  },
]

const discount = [
  {
    image: "/images/food5.webp",
    topic: 'Organic food',
    discount: "20% off",

  },
  {
    image: "/images/toys2.jpg",
    topic: 'Toys',
    discount: "Free Delivery"
  },
  {
    image: "/images/clothes3.webp",
    topic: 'Organic food',
    discount: "20% off"
  },
]

const bestproduct = [
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
]

const product = [
  {
    image: "/images/20product3.jpg",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
  {
    image: "/images/product4.webp",
    title: "Toys",
    rate: "$244",
  },
]

const user = [
  {
    logo: <HiMiniUserGroup />,
    title: "Satisfied customers",
    year: "1963",
  },
  {
    logo: <GrServices />,
    title: "Quality of service",
    year: "99%",
  },
  {
    logo: <LiaCertificateSolid />,
    title: "Quality certificates",
    year: "33",
  },
  {
    logo: <MdOutlineEventAvailable />,
    title: "Available Products",
    year: "789",
  },
]

const reviews = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    clientName: "Client Name 1",
    profession: "Profession 1",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    clientName: "Client Name 2",
    profession: "Profession 2",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    clientName: "Client Name 2",
    profession: "Profession 2",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 4,
    title: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    clientName: "Client Name 2",
    profession: "Profession 2",
    imageUrl: "/images/user.jpg",
  },
  {
    id: 5,
    title: "Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s.",
    clientName: "Client Name 2",
    profession: "Profession 2",
    imageUrl: "/images/user.jpg",
  },

];
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div className={`${className} slider2 `} style={{
      ...style, color: "#81c408",
      display: "flex",
      fontSize: "23px",
      left: "1160px",
      top: "-61px",
      zIndex: 1,
      height: "37px",
      width: "71px",
      paddingRight: "17px",
      background: "white",
      borderRadius: "24px",
      border: "1px solid #FFB524",
      justifyContent: "center",
      alignItems: "center"
    }} onClick={onClick}>
      <IoIosArrowRoundForward size={30} />
    </div>
  )
}
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div className={`${className} slider2`}
      style={{
        ...style, color: "#81c408", display: "flex",
        fontSize: "23px",
        right: "0px",
        zIndex: 1,
        top: "-61px",
        zIndex: 1,
        height: "37px",
        width: "71px",
        paddingRight: "17px",
        background: "white",
        borderRadius: "24px",
        border: "1px solid #FFB524",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onClick}>
      <IoIosArrowRoundBack size={30} />
    </div>
  )
}
export default function Home() {
  const [selectedTab, setSelectedTab] = useState('allproduct');
  const [SelectedCountry,setSelectedCountry] =useState("")
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };

  var setting2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }

    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }

    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }]
  }

  var setting3 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    autoplaySpeed: 4000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }

    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }

    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }]

  }

  const filteredProducts = selectedTab === 'allproduct'
    ? organic
    : organic.filter(product => product.topic === selectedTab);


  const { addToCart } = useContext(createCart)

  useEffect(() => {
    // Get User Location and Set Default Country
    fetch("/api/ipinfo")
      .then((res) => res.json())
      .then((location) => {
        // const userCountry = formattedCountries.find(
        //   (c) => c.countryCode === location.country_code
        // );
        setSelectedCountry(location.country);
        // if (userCountry) {
        // } else {
        //   setSelectedCountry(formattedCountries[0]);
        // }
      })
      .catch((err) => console.error("Location fetch error:", err));

  }, [])

console.log(SelectedCountry,"SelectedCountry")
  return (
    <div className="">
      <div className="py-16 md:py-9 sm:py-7"></div>
      {/*....................search  product................ */}

     
      <div
        className="w-full h-[60%] backgroundcolor "
        style={{ backgroundImage: `url(${wallpaper.src})`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
        <div className="customContainer flex items-center gap-56 py-12 lg:gap-8  md:gap-10 md:flex-col sm:flex-col sm:gap-16" >
          <div className=" z-30  flex flex-col gap-8 sm:gap-6">
            <h1 className="text-2xl  font-extrabold text-yellow">100% Organic Products</h1>
            <div className="text-green text-6xl font-extrabold xxl:text-5xl lg:text-4xl md:text-5xl sm:text-4xl">Organic Products & Dog Products</div>
            <div className="relative">
              <input type="search" className=" w-full rounded-3xl px-6 py-3 focus:outline-yellow focus:outline-2 boxShadow border-yellow border-2 sm:text-xs  " placeholder="Search" />
              <button className="absolute  rounded-3xl px-6 py-3 bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow sm:text-xs ">Submit Now</button>
            </div>
          </div>
          <div className="w-[40%] h-[50%] lg:w-[54%] z-40 rounded-lg  md:w-full px-16 sm:w-full sm:px-7">
            <Slider {...settings} className="p-4 bg-white rounded-lg slider ">
              <div className="bg-[url('/images/product.jpg')] bg-cover bg-center h-[400px] lg:h-[344px] sm:h-[274px] rounded-lg ">
                <div className="flex justify-center items-center h-[400px] lg:h-[344px] sm:h-[274px] ">
                  <h1 className="py-3 px-6 rounded-xl yellowbg text-white text-xl font-bold cursor-pointer">Dog Toys</h1>
                </div>
              </div>
              <div className="bg-[url('/images/product2.avif')] bg-cover bg-center h-[400px] lg:h-[344px] sm:h-[274px]  rounded-lg">
                <div className="flex justify-center items-center h-[400px] lg:h-[344px] sm:h-[274px] ">
                  <h1 className="py-3 px-6 rounded-xl yellowbg text-white text-xl font-bold cursor-pointer">Dog Toys</h1>
                </div>
              </div>
              <div className="bg-[url('/images/product5.webp')] bg-cover bg-center h-[400px] lg:h-[344px] sm:h-[274px] rounded-lg">
                <div className="flex justify-center items-center h-[400px] lg:h-[344px] sm:h-[274px] ">
                  <h1 className="py-3 px-6 rounded-xl yellowbg text-white text-xl font-bold cursor-pointer">Dog Toys</h1>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>
      <h3>{SelectedCountry} country123</h3>
      {/*......................shipping cart................... */}
      <div className="customContainer  grid grid-cols-4 gap-10 py-28 md:grid-cols-2 sm:grid-cols-1 sm:py-14">
        {shipping.map((item, index) => {
          return (
            <div className="bg-lightgrey p-4 rounded-xl flex justify-center items-center flex-col gap-3 " key={index}>
              <div className="bg-yellow rounded-full p-7 text-white relative">{item.logo}
                <div className="w-8 h-8 bg-yellow rotate-45 absolute right-[2.58rem] top-[5.99rem]"></div>
              </div>
              <h1 className="text-xl font-semibold text-black mt-5">{item.title}</h1>
              <p className="text-[#747d88] font-medium text-lg">{item.detail}</p>
            </div>
          )
        })}
      </div>

      {/**...................organic products................... */}
      <div className="customContainer gap-10 xxl:gap-8 py-10 lg:gap-6">
        <div className="flex justify-between md:flex-col gap-6 sm:flex-col">
          <h1 className="text-[40px] text-grey font-bold lg:text-4xl sm:text-2xl">Our Organic Products</h1>
          <ul className="flex gap-4 items-center sm:gap-2">
            <li
              className={`text-lg py-2 px-5 lg:text-base sm:text-sm sm:py-2 sm:rounded-xl sm:px-2  lg:px-4 rounded-3xl cursor-pointer ${selectedTab == 'allproduct' ? 'bg-yellow' : 'bg-lightgrey '}`}
              onClick={() => setSelectedTab('allproduct')} // Fixed this
            >
              All Products
            </li>
            <li
              className={`text-lg py-2 px-5 lg:text-base sm:text-sm sm:py-2 sm:rounded-xl sm:px-2  lg:px-4 rounded-3xl cursor-pointer ${selectedTab == 'Food' ? 'bg-yellow' : 'bg-lightgrey '}`}
              onClick={() => setSelectedTab('Food')} // Fixed this
            >
              Foods
            </li>
            <li
              className={`text-lg py-2 px-5  lg:text-base sm:text-sm sm:py-2 sm:rounded-xl sm:px-2  lg:px-4  rounded-3xl cursor-pointer ${selectedTab == 'Clothes' ? 'bg-yellow' : 'bg-lightgrey '}`}
              onClick={() => setSelectedTab('Clothes')} // Fixed this
            >
              Clothes
            </li>
            <li
              className={`text-lg py-2 px-5 lg:text-base sm:text-sm sm:py-2 sm:rounded-xl sm:px-2  lg:px-4 rounded-3xl cursor-pointer ${selectedTab == 'Toys' ? 'bg-yellow' : 'bg-lightgrey '}`}
              onClick={() => setSelectedTab('Toys')} // Fixed this
            >
              Toys
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-4 mt-10 gap-10 lg:grid-cols-3 lg:text-base lg:px-4 md:grid-cols-2 sm:grid-cols-1">
          {filteredProducts.map((item, index) => (
            <div
              className="flex flex-col rounded-xl overflow-hidden shadow-2xl h-fit cursor-pointer"
              key={index}
            >
              <div className="overflow-hidden">
                <Image
                  src={item.productImage}
                  alt=""
                  width={900}
                  height={900}
                  className="w-full h-[220px] lg:h-[200px] rounded-t-xl hover:scale-125 hover:duration-500 hover:ease-in-out"
                />
              </div>

              <div className="flex flex-col gap-3 justify-center text-center p-5 lg:p-3  border border-yellow rounded-b-xl">
                <h1 className="text-xl font-semibold lg:text-lg">{item.topic}</h1>
                <p className="text-[17px] xxl:text-[16px] lg:text-sm">{item.product}</p>
                <ul className="flex gap-3 justify-between items-center">
                  <li className="text-xl font-semibold lg:text-base">${item.price} /kg</li>
                  <button className="rounded-3xl px-2 py-1 flex gap-4 items-center xxl:gap-2 lg:text-base lg:gap-2 bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow" onClick={() => addToCart(item)}>
                    <FaShoppingBag />
                    Add to cart
                  </button>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*.....................discount............................ */}
      <div className="customContainer grid grid-cols-3 gap-10 py-32 lg:py-20 lg:gap-8 md:grid-cols-2 md:py-14 sm:grid-cols-1 sm:py-16">
        {discount.map((items, index) => {
          return (
            <div className={`border ${index === 1 ? 'border-[#45595B]' : "border-yellow"}  rounded-xl`} key={index}>
              <Image src={items.image} alt="food" width={900} height={900} className="rounded-t-xl h-[300px] lg:h-[240px] sm:h-[220px] " />
              <div className={`${index === 1 ? "bg-[#45595B]" : 'bg-yellow'} h-[100px] lg:h-[80px] justify-center flex rounded-b-xl `}>
                <div className="bg-green justify-center flex flex-col p-5 lg:p-4 rounded-xl mt-[-44px] h-[90px] items-center">
                  <h1 className="text-white font-semibold text-lg">{items.topic}</h1>
                  <p className="text-2xl font-semibold lg:text-xl">{items.discount}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/*.....................BestSeller Products ................... */}
      <div className="customContainer py-12 sm:py-5">
        <h1 className="text-[40px] text-grey font-bold lg:text-3xl md:text-[30px] sm:text-xl sm:mb-10">Our BestSeller Products</h1>
        <div className="py-10">
          <Slider {...setting2} className="w-full">
            {organic.map((item, index) => {
              return (
                <div className="mx-4 sm:mx-1" key={index}>
                  <div className="flex flex-col rounded-xl overflow-hidden border border-green h-fit cursor-pointer mx-4 lg:mx-5 sm:mx-2" >
                    <div className=" overflow-hidden">
                      <Image src={item.productImage} alt="item1" width={900} height={900} className="w-full h-[220px] lg:h-[200px] sm:h-[200px] rounded-t-xl hover:scale-125 hover:transition-transform " />
                    </div>
                    <div className="flex flex-col gap-3 justify-center text-center p-5 rounded-b-xl lg:p-3">
                      <h1 className="text-xl font-semibold lg:text-base sm:text-sm">{item.topic}</h1>
                      <p className="text-[17px]  xxl:text-[16px] lg:text-base sm:text-sm">{item.product}</p>
                      <ul className="flex gap-3 justify-between items-center">
                        <li className="text-xl font-semibold lg:text-base sm:text-sm">{item.price}</li>
                        <button className="rounded-3xl px-2 py-1 flex gap-4 items-center lg:text-base lg:gap-2 sm:text-sm bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow" onClick={() => addToCart(item)}><FaShoppingBag />
                          Add to cart
                        </button>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>

      {/*.......................our store................... */}
      <div className="bg-yellow py-10 mt-10">
        <div className="customContainer flex gap-20 md:flex-col md:gap-10 sm:flex-col sm:gap-14">
          <div className="flex justify-center flex-col gap-5 ">
            <h1 className="text-6xl text-white font-bold lg:text-5xl sm:text-3xl">Fresh Exotic Fruits</h1>
            <p className="text-gray-800 text-6xl font-medium lg:text-5xl sm:text-3xl">in Our Store</p>
            <p className="text-lg lg:text-base sm:text-sm">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <button className="w-[120px] py-3 rounded-3xl border-[2px] border-white text-grey font-semibold text-xl lg:text-lg lg:py-2 sm:text-sm sm:w-[100px]">Buy</button>
          </div>
          <Image src={"/images/toy.webp"} alt="items" width={900} height={900} className="w-[500px] lg:w-[300px]" />
        </div>
      </div>

      {/*......................bestproduct.................... */}
      <div className="customContainer pt-16 md:pt-7 sm:pt-6">
        <h1 className="text-6xl text-center font-bold text-[#45595b] lg:text-4xl md:text-5xl sm:text-4xl">Bestseller Products</h1>
        <p className="text-center py-10 font-semibold text-gray-800 lg:py-6 lg:text-sm lg:w-[60%] mx-auto md:py-6 sm:text-sm sm:py-6">Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
        <div className="grid grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
          {bestproduct.map((item, index) => {
            return (
              <div className="bg-[#f4f6f8] rounded-md p-5 flex gap-6 lg:p-3 lg:gap-3 sm:gap-4" key={index}>
                <Image src={item.image} alt="items" width={900} height={900} className="w-[180px] h-[180px] xxl:w-[150px] xxl:h-[150px] lg:w-[120px] lg:h-[120px] md:h-[120px] sm:w-[100px] sm:h-[100px] rounded-full" />
                <div className="w-full text-2xl flex flex-col gap-4 xxl:gap-1 lg:gap-1 md:gap-1 sm:gap-1">
                  <h1 className="text-2xl font-semibold lg:text-lg sm:text-sm">{item.title}</h1>
                  <div className="flex gap-3 text-green xxl:gap-1 lg:gap-1 lg:text-base md:gap-1 md:text-base sm:gap-1 sm:text-sm " >
                    {Array(5).fill(null).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="font-semibold xxl:text-xl lg:text-base sm:text-sm">{item.rate}</p>
                  <button className="rounded-3xl px-3 py-1 flex  gap-4 items-center xxl:text-base xxl:gap-1  lg:text-xs lg:gap-1 md:text-sm sm:text-sm bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer text-base hover:bg-yellow"><FaShoppingBag />
                    Add to cart
                  </button>
                </div>
              </div>
            )
          })}

        </div>

        <div className="grid grid-cols-4 gap-7 my-8 md:grid-cols-2 sm:grid-cols-1">
          {product.map((items, index) => {
            return (
              <div key={index}>
                <Image src={"/images/20product3.jpg"} alt="items" width={900} height={900} className="w-[400px] rounded-lg" />
                <div className="w-full text-2xl flex flex-col gap-2  items-center mt-3">
                  <h1 className="text-2xl font-semibold lg:text-lg sm:text-sm">{items.title}</h1>
                  <div className="flex gap-3 text-green xxl:gap-1 lg:gap-1 lg:text-base md:gap-1 md:text-base sm:gap-3 sm:text-base" >
                    {Array(5).fill(null).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <p className="font-semibold lg:text-base sm:text-base">{items.rate}</p>
                  <button className="rounded-3xl px-3 py-1 flex  gap-4 items-center lg:text-xs lg:gap-1 sm:text-sm bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer text-base hover:bg-yellow"><FaShoppingBag />
                    Add to cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-4 gap-10 my-36 px-12  sm:gap-6 py-6 rounded-lg bg-lightgrey lg:px-6 lg:py-4 lg:my-12 md:my-20 sm:my-14 md:grid-cols-2 sm:grid-cols-1 sm:px-6">
          {user.map((items, index) => {
            return (
              <div className=" flex flex-col gap-3 bg-white rounded-xl items-center p-6 " key={index}>
                <div className="text-yellow text-7xl font-bold xxl:text-5xl lg:text-4xl sm:text-5xl">{items.logo}</div>
                <div className="text-green text-3xl font-semibold text-center xxl:text-2xl lg:text-xl sm:text-2xl">{items.title}</div>
                <div className="text-grey text-4xl font-semibold xxl:text-3xl lg:text-2xl sm:text-2xl">{items.year}</div>
              </div>
            )
          })}

        </div>
      </div>

      {/*.......................Our Testimonial................. */}
      <div className="customContainer pb-24 ">
        <h1 className="text-2xl text-green font-semibold text-center xm:text-lg">Our Testimonial</h1>
        <p className="text-5xl text-grey font-bold text-center mb-20 lg:text-4xl lg:mb-14 md:text-4xl sm:text-2xl">Our Client Saying!</p>
        <div className="">
          <Slider {...setting3} className="w-full">
            {reviews.map((items, index) => {
              return (
                <div className="mx-5 sm:mx-1 " key={index}>

                  <div className="bg-lightgrey rounded-lg p-5 mx-5 sm:mx-1" >
                    <p className="pb-5 border-b border-yellow font-medium text-grey lg:text-sm sm:text-[10px] ">{items.title}</p>
                    <div className="flex mt-5 gap-5">
                      <Image src={items.imageUrl} alt="items" width={900} height={900} className="w-[130px] lg:w-[110px] sm:w-[80px] rounded-md" />
                      <div className="flex-1 ">
                        <p className="text-2xl text-grey font-medium lg:text-xl sm:text-[10px]">{items.clientName}</p>
                        <p className="text-gray-500 py-2 font-medium lg:text-sm lg:py-1 sm:text-[10px] sm:py-1">{items.profession}</p>
                        <div className="flex gap-1 text-green lg:text-sm sm:text-xs" >
                          {Array(5).fill(null).map((_, index) => (
                            <FaStar key={index} />
                          ))}
                        </div>
                      </div>
                      <div className="items-center text-4xl text-yellow flex lg:text-2xl sm:text-xl">
                        <FaQuoteRight />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>

        </div>
      </div>
    </div>
  );
}
