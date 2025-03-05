'use client';
import React, { useContext, useEffect, useState } from 'react';
import wallpaper from '../../../public/images/wallpaperjpg.jpg';
import { ImCancelCircle } from 'react-icons/im';
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci';
import { createCart } from '../component/CartContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {
    const [cartTotal, setCartTotal] = useState(0);
    const { deleteItem, cartItem, handleAdd, handleDelete, add ,clearCart} = useContext(createCart);
    const router = useRouter(); 

    const checkCookie = () => {
        const myCookie = localStorage.getItem("token"); 
        if (!myCookie) {
            router.push('/signup');
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            checkCookie();
        }, 500); 
        return () => clearTimeout(timeoutId); 
    }, []);

    useEffect(() => {
        let total = 0;
        cartItem.forEach((product, index) => {
            const quantity = add[index] || 1;
            total += product.price * quantity;
        });
        setCartTotal(total);
    }, [add, cartItem]);

    const calculateTotalForItem = (price, index) => {
        const quantity = add[index] || 1;
        return price * quantity;            
    };

    const checkout = () => {
        try {
            if (cartItem.length === 0) {
               toast.error("Your cart is empty!");
                return;
            }
    
            const formattedCart = cartItem.map((product, index) => ({
                name: product.topic, 
                price: product.price,
                quantity: add[index] || 1,
                total: product.price * (add[index] || 1),
                totalOrder:cartTotal + 3
            }));
    
            const response =  axios.post("/api/addCart", formattedCart);
    
            toast.success("Order placed successfully!");
            console.log("response",response);

            clearCart(); // Call function to reset cart

            // if (response.data.msg) {
            // } else {
            //     alert("Failed to place order.");
            // }
        } catch (error) {
            console.error("API Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };
    

    return (
        <div>
            <div
                className="w-full h-[330px] backgroundcolor2"
                style={{ backgroundImage: `url(${wallpaper.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="customContainer flex items-center h-fit justify-center pt-52 md:pt-[10rem] sm:pt-[11rem]">
                    <h1 className="text-white z-40 font-bold text-4xl">Cart</h1>
                </div>
            </div>
            <div className="customContainer py-20">
                <div className="sm:overflow-x-scroll">
                    <table className="w-full sm:w-[666px]">
                        <thead>
                            <tr className="grid grid-cols-9 border-b border-black py-4 items-center text-left">
                                <th className="col-span-2 text-lg font-semibold text-grey">Products</th>
                                <th className="col-span-2 text-lg font-semibold text-grey">Name</th>
                                <th className="text-lg font-semibold text-grey">Price</th>
                                <th className="col-span-2 text-lg font-semibold text-grey">Quantity</th>
                                <th className="text-lg font-semibold text-grey">Total</th>
                                <th className="text-lg font-semibold text-grey">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItem.map((product, index) => (
                                <tr className="grid grid-cols-9 border-b border-[#dee2e6] py-4 items-center" key={index}>
                                    <td className="col-span-2 text-lg font-semibold text-grey">
                                        <Image
                                            src={product.productImage}
                                            alt="img"
                                            width={60}
                                            height={60}
                                            className="w-[60px] h-[60px] rounded-full bg-grey"
                                        />
                                    </td>
                                    <td className="col-span-2 text-lg font-semibold text-grey md:text-base">{product.topic}</td>
                                    <td className="text-lg font-semibold text-grey md:text-base">{product.price}</td>
                                    <td className="col-span-2 text-lg font-semibold text-grey flex gap-5 items-center cursor-pointer">
                                        <CiCirclePlus onClick={() => handleAdd(index)} className="text-4xl md:text-3xl" />
                                        <span>{add[index] || 1}</span>
                                        <CiCircleMinus onClick={() => handleDelete(index)} className="text-4xl md:text-3xl" />
                                    </td>
                                    <td className="text-lg font-semibold text-grey md:text-base">
                                        {calculateTotalForItem(product.price, index)} $
                                    </td>
                                    <td>
                                        <ImCancelCircle
                                            className="text-4xl text-red-600 md:text-3xl"
                                            onClick={() => deleteItem(index)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex gap-4 my-10 sm:flex-col">
                    <input type="text" placeholder="Coupon Code" className="rounded-2xl p-3" />
                    <button className="rounded-3xl px-6 py-3 bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow sm:text-xs">
                        Submit Now
                    </button>
                </div>
                <div className="flex flex-row-reverse my-10">
                    <div className="w-[450px] bg-lightgrey p-5 rounded-lg md:w-[350px] sm:w-full">
                        <h1 className="text-4xl font-bold py-5 sm:text-xl md:text-2xl">Cart Total</h1>
                        <div className="flex justify-between gap-3">
                            <span className="text-xl font-semibold sm:text-base md:text-lg">Subtotal:</span>
                            <span className="text-lg font-medium sm:text-sm md:text-base">{cartTotal} $</span>
                        </div>
                        <div className="flex justify-between gap-3 border-b border-gray-400 py-5">
                            <span className="text-xl font-semibold sm:text-base md:text-lg">Shipping</span>
                            <span className="text-lg font-medium sm:text-sm sm:w-[120px] md:text-base md:w-[170px]">
                                Flat rate: $3.00 Shipping to Ukraine.
                            </span>
                        </div>
                        <div className="flex justify-between gap-3 border-b border-gray-400 py-5">
                            <span className="text-xl font-semibold sm:text-base md:text-lg">Total</span>
                            <span className="text-lg font-medium sm:text-sm md:text-base">{cartTotal + 3} $</span>
                        </div>
                        <button className="rounded-3xl px-6 py-3 my-5 md:py-2 bg-green top-0 right-0 border-yellow border-2 text-white font-semibold cursor-pointer hover:bg-yellow sm:text-xs"     onClick={checkout}
                        >
                        Proceed Checkout </button>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Page;