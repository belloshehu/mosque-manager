import React from 'react'
import { FaBell, FaBookOpen, FaGamepad, FaMosque, FaPray } from 'react-icons/fa'
import Link from 'next/link'
import SibarStyles from '../styles/Sidebar.module.css'
import { NavItem } from './NavItem'

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
        text: 'Learning',
        icon: <FaBookOpen className='text-indigo-500'/>,
        url: '/learning'
    },
    {
        text: 'games',
        icon: <FaGamepad className='text-indigo-500' />,
        url: '/games'
    },
    {
        text: 'notifications',
        icon: <FaBell className='text-indigo-500'/>,
        url: '/notifications'
    }
]

const Sidebar = () => {
  return (
    <aside className='w-0 md:w-1/5 h-auto bg-white overflow-y-auto'>
        <nav>
            <ul className='flex flex-col gap-2 text-skye-400 p-5 pr-0'>
                {
                    navItems.map(item => <NavItem key={item.text} {...item} />)
                }
            </ul>
            <div className='bg-slate-100 rounded-md mr-2'>
                <p>Want to receive notifications?</p>
                <Link href='/subscribe' className='flex gap-3 items-center p-10 text-xl text-gray-700 w-1'>
                    <button className="bg-indigo-500 rounded-lg py-2 px-5 text-white">Subscribe</button>
                </Link>
            </div>
        </nav>
    </aside>
  )
}

export default Sidebar