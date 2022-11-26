import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavItem = ({text, icon, url, handleCloseMenu}) => {
  const router = useRouter()
  return (
    
    <li onClick={handleCloseMenu}>
        <Link href={url} 
          className={`${router.pathname == url ? "bg-gray-200 border-r-4 border-indigo-500": ""} flex gap-3 items-center hover:bg-gray-200 hover:border-r-4 hover:border-indigo-500 p-5 text-xl text-gray-700`}>
            {icon} {text.charAt(0).toUpperCase() + text.slice(1)}
        </Link>
    </li>
  )
}
