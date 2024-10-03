import React from 'react'
import img from '../Food/3.avif'
import { FaStar } from "react-icons/fa";

const FoodCard = ({id, name, price, image, rating, desc}) => {
  return (
    <div className='bg-green-900 w-full lg:w-[23vw] mt-3 '>
      <div className='flex items-center flex-col p-3'>
        <img className='w-[200px] h-[100px] rounded-md hover:scale-110 transition-all duration-500 cursor-grab' src={image} alt="" />
      </div>
      <div className='p-3 bg-gray-600 rounded-b-md'>
        <div className='flex items-center justify-between font-semibold'>
          <h1>{name}</h1>
          <h1>$: {price}</h1>
        </div>
        <p>{desc}.</p>
        <div className='flex items-center justify-between'>
          <span className='flex items-center gap-2 font-semibold'>
            <FaStar className='text-yellow-300 text-2xl' />
            <h1>{rating}</h1>
          </span>
          <button className='bg-blue-900 px-2 rounded-md hover:bg-green-900 transition-all duration-500 hover:text-black   font-semibold text-xl'>Add To Card</button>
        </div>
      </div>
    </div>
  )
}

export default FoodCard