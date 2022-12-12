import Image from 'next/image'
import React from 'react'
import {FaBars} from 'react-icons/fa'
import logo from '../public/logo.png'
import Link from 'next/link'

const Header = ({brandName, setToggleSidebar}) => {

  const handleMenubarClick = () =>{
    setToggleSidebar((prev) => !prev)
  }

  return (
    <header className='flex w-full h-20 bg-slate-200 px-5 p-5 md:px-10 items-center justify-between'>
        <Link className='flex items-center gap-2' href='/'>
          <Image src={logo} sizes='20px' className='rounded-full w-10 h-10' alt='logo'/>
          <h1 className='md:text-4xl md:font-bold text-xl font-semibold text-indigo-500 capitalize font-serif self-start align-middle'>
            Pti mosque
          </h1>

        </Link>
        <form className='hidden md:inline'>
            <input type='search' placeholder='Search' className='p-2 rounded-lg bg-white shadow-inner border-none outline-none'/>
        </form>
        <FaBars className='lg:hidden text-3xl pr-0' onClick={handleMenubarClick}/>
    </header>
  )
}

export default Header