import React, {useState, useEffect} from 'react'
import { FaBell, FaBookOpen, FaGamepad, FaMosque, FaPray } from 'react-icons/fa'
import Link from 'next/link'
import SibarStyles from '../styles/Sidebar.module.css'
import { NavItem } from './NavItem'
import { FaTimes, FaTable } from 'react-icons/fa'

const navItems = [
    {
        text: 'mosque',
        icon: <FaMosque className='text-indigo-500'/>,
        url: '/'
    },
    {
        text: 'prayers',
        icon: <FaPray className='text-indigo-500'/>,
        url: '/prayers'
    },
    {
        text: 'programs',
        icon: <FaTable className='text-indigo-500'/>,
        url: '/programs'
    },
    {
        text: 'Learning',
        icon: <FaBookOpen className='text-indigo-500'/>,
        url: '/learning'
    },
    // {
    //     text: 'games',
    //     icon: <FaGamepad className='text-indigo-500' />,
    //     url: '/games'
    // },
    {
        text: 'notifications',
        icon: <FaBell className='text-indigo-500'/>,
        url: '/notifications'
    }
]

const Menubar = ({setToggleSidebar}) => {
    
    const handleCloseMenu = ()=>{
        setToggleSidebar(false)
    }
    return (
        <aside className='absolute top-0 z-10 w-5/6 h-full bg-white overflow-y-auto transition-all duration-300 translate-y-0 md:hidden'>
            <FaTimes className='text-xl absolute right-3 top-9' onClick={handleCloseMenu} />
            <h3 className='m-5 p-2 text-indigo-500 text-3xl font-bold bg-slate-200 w-4/5'>Pti mosque</h3>
            <nav>
                <ul className='flex flex-col gap-2 text-skye-400 p-5 pr-0'>
                    {
                        navItems.map(item => <NavItem key={item.text} {...item} handleCloseMenu={handleCloseMenu}/>)
                    }
                </ul>
                <li className='w-full list-none' onClick={handleCloseMenu}>
                    <Link href='/subscribe' className='flex gap-3 items-center p-10 text-xl text-gray-700 w-1'>
                        <button className="bg-indigo-500 rounded-lg py-2 px-5 text-white"><s>Subscribe</s></button>
                    </Link>
                </li>
            </nav>
        </aside>
    )
}


export default Menubar