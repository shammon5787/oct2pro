import React from 'react'
import img from '../Food/4.avif'
import { FiMinus,FiPlus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem, removeCard } from '../Store/CardSlice';

const CardItem = ({id, name, image, price, qty}) => {
  const dispatch = useDispatch();

  return (
    <div className='p-2 bg-slate-600 rounded-md flex gap-5 mt-1 shadow-md'>
        <MdDelete onClick={()=>dispatch(removeCard({id}))} className='absolute right-5 cursor-pointer mt-0 hover:text-red-800 ' />
        <img className='w-[50px] h-[50px] rounded-full ' src= {image} alt="" />
        <div className='flex'>
            <div className='leading-5 mt-3 font-semibold'>
                <h1>{name}</h1>
                <h1>%: {price}</h1>
            </div>
            <div className='absolute flex items-center gap-3 mt-8 right-6 font-semibold'>
                <FiMinus onClick={()=>qty > 1 ? dispatch(decrementItem({id})) : qty = 1} className='cursor-pointer text-xl bg-black rounded-full hover:bg-green-700 ' />
                <span>{qty}</span>
                <FiPlus onClick={()=>dispatch(incrementItem({id}))} className='cursor-pointer text-xl bg-black rounded-full hover:bg-green-700 ' />
            </div>
        </div>
    </div>
  )
}

export default CardItem