import React, {useState} from 'react'
import { FaBell } from 'react-icons/fa'
import { NotificationForm } from '../components'
import Spinner from '../components/Spinner'


const Subscribe = () => {
    const [loading, setLoading] = useState(true)

    if(loading){
        return (
            <div>
                <Spinner message={'This feature is not available yet. Try again later'}/>
            </div>
        )
    }
    return (
        <div className='p-2 md:5 bg-slate-0 h-full flex gap-4 flex-col items-center leading-7 text-center'>
            <h3 className='text-3xl text-indigo-400 flex gap-2 justify-center items-center m-2'><FaBell /> Subscription</h3>
            <p>Fill the form below to get instant notifications on prayer timing, programs and events</p>
            <NotificationForm />
        </div>
    )
}

export default Subscribe
