import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'

const Home = () => {
  return (
    <div className='bg-neutral-200 w-full min-h-screen'>
        <Nav/>
        <div className='flex flex-wrap justify-center items-center gap-6 pt-12 w-[100%]'>
            {Categories.map((item)=> {
                return<div className='flex flex-col items-start px-5 justify-start'> {item.name} {item.image} </div>
            })}
        </div>
    </div>
    
  )
}

export default Home