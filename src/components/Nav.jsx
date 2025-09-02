import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='w-full h-14 flex justify-between items-center px-5 pt-10'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg shadow-xl' >
            <MdFastfood className='w-[35px] h-[35px] text-red-500' />
        </div>
        <form className='w-[70%] h-[60px] bg-white flex items-center px-7 gap-6 rounded-e-full rounded-l-full shadow-xl'>
            <IoSearch className='w-[30px] h-[30px] text-gray-600'/>
            <input type="text" placeholder='Search Your Appetite...' className='w-[100%] outline-0 text-[20px]' />
        </form>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-lg shadow-xl relative' >
            <span className='absolute top-1 right-1  text-md text-gray-700 bg-red-500 rounded-full h-[20px] w-[20px] flex items-center justify-center'>0</span>
            <FaShoppingBag className='w-[30px] h-[30px] text-red-500' />
        </div>
    </div>
  )
}

export default Nav