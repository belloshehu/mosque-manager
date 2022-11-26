import React from 'react'
import { FaGamepad } from 'react-icons/fa'

const games = () => {
  return (
    <div className='p-2 md:p-5'>
        <h3 className='text-3xl text-indigo-500 font-bold flex gap-2 justify-center items-center m-2'><FaGamepad/> Games</h3>
        <p>We are preparing exciting and educative games that can help you learn more in various fields.</p>
    </div>
  )
}

export default games