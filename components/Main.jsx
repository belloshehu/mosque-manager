import React from 'react'
import ClockWrapper from './ClockWrapper'
const Main = ({children}) => {
  return (
    <main className='h-full p-10 bg-gray-50 flex-1  overflow-y-auto'>
      {children}
    </main>
  )
}

export default Main