import React from 'react'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import { useState } from 'react'
import Menubar from './Menubar'
import { client } from '../lib/client'

const Layout = ({children}) => {
    const [toggleSidebar, setToggleSidebar] = useState(false)

    return (
        <div className="flex w-screen h-full bg-gray-100 flex-col relative items-center justify-center text-center leading-7 md:w-2/3 overflow-x-hidden m-auto mt-0">
            <Header setToggleSidebar={setToggleSidebar}/>
            <section className='flex w-full h-full'>
                {toggleSidebar && <Menubar setToggleSidebar={setToggleSidebar} />}
                <Sidebar/>
                <main className='p-1 pt-10 h-screen bg-gray-0 flex-1 overflow-y-auto md:w-full md:p-10 items-center'>
                    {children}  
                </main>
            </section>
        </div>
    )
}

  
export default Layout