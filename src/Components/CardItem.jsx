import React from 'react'
import img from '../Food/4.avif'
import { FiMinus,FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

const CardItem = () => {
  return (
    <div className='p-2 bg-slate-600 rounded-md flex gap-5'>
        <MdDelete className='absolute right-5 cursor-pointer mt-0 hover:text-red-800 ' />
        <img className='w-[50px] h-[50px] rounded-full ' src= {img} alt="" />
        <div className='flex'>
            <div className='leading-5 mt-3 font-semibold'>
                <h1>PIZZA</h1>
                <h1>%: 69</h1>
            </div>
            <div className='absolute flex items-center gap-3 mt-8 right-6 font-semibold'>
                <FiMinus className='cursor-pointer text-xl bg-black rounded-full hover:bg-green-700 ' />
                <span>1</span>
                <FiPlus className='cursor-pointer text-xl bg-black rounded-full hover:bg-green-700 ' />
            </div>
        </div>
    </div>
  )
}

export default CardItem