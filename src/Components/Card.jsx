import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi2";
import CardItem from './CardItem';

const Card = () => {
    const [activeCard, setactiveCard] = useState(true)
    return (
        <>
            <div className={`fixed top-0 right-0 p-3 bg-blue-950 w-full h-full lg:w-[28vw] ${activeCard ? "translate-x-0" : "translate-x-full"} transition-all duration-500 z-50 `}>
                <div className='flex items-center justify-between font-semibold text-3xl'>
                    <h1>Your Orders</h1>
                    <IoMdClose onClick={() => setactiveCard(!activeCard)} className='hover:bg-green-950 cursor-pointer rounded-full bg-black' />
                </div>
                <CardItem />
                <div className='font-semibold absolute bottom-0'>
                    <h1>Total Items: </h1>
                    <h1>Total Price: </h1>
                    <hr />
                    <button className='bg-blue-900 px-2 my-2 rounded-md hover:bg-green-900 transition-all duration-500 hover:text-black   font-semibold text-xl w-[90vw] lg:w-[26vw] '>Check Out</button>
                </div>
            </div>
            <HiShoppingCart onClick={() => setactiveCard(true)} className='fixed bottom-8 right-8 text-4xl cursor-pointer bg-black rounded-full' />
        </>
    )
}

export default Card