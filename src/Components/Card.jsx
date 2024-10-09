import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi2";
import CardItem from './CardItem';
import { useSelector } from 'react-redux';

const Card = () => {
    const [activeCard, setactiveCard] = useState(true)
    const selectItem = useSelector((state)=>state.cart.cart)
    const totalItem = selectItem.reduce((totalitem, items)=>totalitem + items.qty, 0)
    const totalPrice = selectItem.reduce((totalPrice, items)=>totalPrice + items.qty * items.price, 0)

    return (
        <>
            <div className={`fixed top-0 right-0 p-3 bg-blue-950 w-full h-full lg:w-[28vw] ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center justify-between font-semibold text-3xl'>
                    <h1>Your Orders</h1>
                    <IoMdClose onClick={() => setactiveCard(!activeCard)} className='hover:bg-green-950 cursor-pointer rounded-full bg-black' />
                </div>
                
                {
                    selectItem.map((item)=>{
                        return(
                            <CardItem key={item.id} id= {item.id} name = {item.name} price = {item.price} image = {item.image} qty = {item.qty} />
                        )
                    })
                }

                <div className='font-semibold absolute bottom-0'>
                    <h1>Total Items: {totalItem} </h1>
                    <h1>Total Price: {totalPrice} </h1>
                    <hr />
                    <button className='bg-blue-900 px-2 my-2 rounded-md hover:bg-green-900 transition-all duration-500 hover:text-black   font-semibold text-xl w-[90vw] lg:w-[26vw] '>Check Out</button>
                </div>
            </div>
            <HiShoppingCart onClick={() => setactiveCard(true)} className={`fixed bottom-8 right-8 text-4xl cursor-pointer bg-black rounded-full ${selectItem.length > 0 ? "animate-bounce" : "animate-none"} `}/>
        </>
    )
}

export default Card