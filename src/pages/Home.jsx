import React from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'


const Home = () => {
  return (
    <div className='bg-neutral-200 w-full min-h-screen'>
        <Nav/>
        <div className='flex flex-wrap justify-center gap-16 pt-12'>
            {Categories.map((item)=> {
                return<div> {item.name} {item.image} </div>
            })}
        </div>
    </div>
  )
}

export default Home