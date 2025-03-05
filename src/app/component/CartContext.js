'use client'
import React, { createContext, useState } from 'react'

const createCart = createContext();

const CartContext = ({ children }) => {
    const [count, setCount] = useState(0);
    const [add, setAdd] = useState(1);
    
    const [cartItem, setCartItem] = useState([]);
    const addToCart = (item) => {
        setCartItem((prevItems) => [...prevItems, item]);
        setCount(count + 1);
    }

    const deleteItem = (id) => {
        setCartItem(cartItem.filter((item,index) => index !== id));
        setCount(count - 1); 
    };

    const handleAdd=(index)=>{
       setAdd((prev)=>({
        ...prev,
        [index]: (prev[index] || 1) + 1
           }))
    }
    const handleDelete=(index)=>{
        setAdd((prev)=>({
            ...prev,
            [index]:Math.max((prev[index] || 0)-1,0)
        }))
    }

    const clearCart = () => {
        setCartItem([]);  
        setAdd({});       
        setCount(0);      
    };
   
    return (
        <createCart.Provider value={{count,addToCart,deleteItem,cartItem,handleAdd,handleDelete,add ,clearCart}}>
            {children}
        </createCart.Provider>
    )
}

export default CartContext
export { createCart }