import React, { useEffect, useState } from 'react'
import FoodData from '../Data/FoodData'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Store/CategorySlice'

const CategoryMenu = () => {
    const [categories, setcategories] = useState([])

    const LIstUniqueCategory = () => {
        const UniqueCategory = [... new Set(FoodData.map((food) => food.category))]
        setcategories(UniqueCategory);
    }
    useEffect(() => {
        LIstUniqueCategory()
    }, [])

    const dispatch = useDispatch()

    return (
        <div className='mt-20'>
            <h1 className='uppercase font-bold text-3xl'>order your favorite food</h1>
            <div className='flex items-center gap-5 py-2 overflow-x-scroll lg:overflow-x-hidden'>
            <button onClick={()=>dispatch(addCategory("All"))} className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-900 transition-all duration-500 hover:text-black   font-semibold text-xl'>All</button>
                {
                    categories.map((category, i) => (
                        <button onClick={()=>dispatch(addCategory(category))} key={i} className='bg-blue-900 px-2 py-0.5 rounded-md hover:bg-green-900 transition-all duration-500 hover:text-black   font-semibold text-xl'>{category}</button>
                    ))}
            </div>
        </div>
    )
}

export default CategoryMenu