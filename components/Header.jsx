import React from 'react'
import {FaBars} from 'react-icons/fa'

const Header = ({brandName, setToggleSidebar}) => {

  const handleMenubarClick = () =>{
    setToggleSidebar((prev) => !prev)
  }

  return (
    <header className='flex w-full bg-slate-200 px-5 p-5 md:px-10 h-20 items-center justify-between'>
        <FaBars className='lg:hidden text-4xl' onClick={handleMenubarClick}/>
        <h1 className='md:text-4xl md:font-bold text-xl font-semibold text-indigo-500 capitalize'>
            {brandName} mosque
        </h1>
        <form className='hidden md:inline'>
            <input type='search' placeholder='Search' className='p-2 rounded-lg bg-white shadow-inner border-none outline-none'/>
        </form>
    </header>
  )
}

export default Header