import React from 'react'
import NotificationForm from '../components/NotificationForm'
import { FaSadTear, FaBell } from 'react-icons/fa'

const notifications = ({notificationsData}) => {
  return (
    <div className='p-2 md:5 bg-slate-0 h-full flex gap-4 flex-col items-center'>
        <h3 className='text-3xl text-indigo-400 flex gap-2 justify-center items-center m-2'><FaBell /> Notifications</h3>
        {
            notificationsData? 
            (<h2>You  have notifications</h2>)
            :(
                <div className='flex gap-2'>
                    <h2>no notifications yet</h2>
                    <FaSadTear className='text-2xl text-indigo-500' />
                </div>
            )
        }
    </div>
  )
}

export default notifications