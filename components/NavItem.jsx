import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavItem = ({text, icon, url, handleCloseMenu}) => {
  const router = useRouter()
  return (
    
    <li onClick={handleCloseMenu}>
        <Link href={url} 
          className={`${router.pathname == url ? "bg-gray-200 border-r-4 border-indigo-500 rounded-xl": "border-white"} 
             border-r-4  flex gap-3 items-center 
            hover:bg-gray-200 
            hover:rounded-xl p-5 text-xl text-gray-700 
            transition-all duration-200 ease-linear`}
          >
            <span className='bg-indigo-100 p-2 rounded-full'>
              {icon} 
            </span>
            {text.charAt(0).toUpperCase() + text.slice(1)}
        </Link>
    </li>
  )
}
