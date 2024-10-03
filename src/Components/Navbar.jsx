import React from 'react'
import { useDispatch } from 'react-redux'
import { addSearch } from '../Store/SearchSlice'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-2 lg:flex-row lg:items-center justify-between'>
        <div className='font-bold text-4xl'>
            <h1> {new Date().toUTCString().slice(0,16)} </h1>
            <h1 className='uppercase'>welcome to our fast food center</h1>
        </div>
        <input onChange={(e)=>dispatch(addSearch(e.target.value))} className='text-black font-semibold p-2 w-full lg:w-[25vw] rounded-md outline-none' type="search" name="" placeholder='search here' id="" />
    </div>
  )
}

export default Navbar