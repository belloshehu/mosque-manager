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
        <div className="flex w-screen h-screen bg-gray-100 flex-col relative items-center justify-center text-center leading-7 md:w-2/3 overflow-x-hidden m-auto">
            <Header setToggleSidebar={setToggleSidebar}/>
            <section className='flex h-full w-full'>
                {toggleSidebar && <Menubar setToggleSidebar={setToggleSidebar} />}
                <Sidebar/>
                <main className='h-auto p-1 pt-10 bg-gray-50 flex-1 overflow-y-auto md:w-full md:p-10 items-center'>
                    {children}  
                </main>
            </section>
        </div>
    )
}

  
export default Layout