import React from 'react'
import { useState } from 'react'
import { client } from '../lib/client'
import {useRouter} from 'next/router'


const NotificationForm = () => {
    const [user, setUser] = useState({
        'firstName': '',
        'lastName': '',
        'email': '',
        'phoneNumber': ''
    })
    const router = useRouter()

    const handleChange = (event) =>{    
        const newUser = {...user, [event.target.name]: event.target.value}
        setUser(newUser)
        console.log(user)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(user)

        const doc = {
            _id: new Date().getTime().toString(),
            _type: 'user',
            ...user
        }
        console.log(doc)
        client.createIfNotExists(doc)
            .then(()=>{
                router.push('/',)
                console.log(doc)
            })
            .catch((error)=>{
                console.log(error)
            }) 
    }
    return (
        <div className='w-full md:w-3/5 bg-slate-100 p-2 md:p-5'>
            {/* <h4 className='text-extrabold text-2xl my-4 text-center'>Notification form</h4> */}
            <form className='flex flex-col gap-4 w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-1 w-full text-left'>
                    <label htmlFor="phone_number">First Name</label>
                    <input 
                        type="text" 
                        id='first_name' 
                        name='firstName'
                        placeholder='First name' 
                        className='w-full p-2 border-2 outline-none rounded-md'
                        maxLength='30'
                        minLength='2'
                        required
                        value={user?.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col gap-1 w-full text-left'>
                    <label htmlFor="phone_number">Last Name</label>
                    <input 
                        type="text" 
                        id='last_name' 
                        name='lastName'
                        placeholder='Last name' 
                        className='w-full p-2 border-2 outline-none rounded-md'
                        maxLength='30'
                        minLength='2'
                        required
                        value={user?.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col gap-1 w-full text-left'>
                    {/* <label htmlFor="email">Email</label> */}
                    <input 
                        type="email" 
                        id='email' 
                        name='email'
                        placeholder='Email'
                        className='w-full p-2 border-2 outline-none rounded-md'
                        required
                        value={user?.email}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex flex-col gap-1 w-full text-left'>
                    <label htmlFor="phone_number">Phone number</label>
                    <input 
                        type="tel" 
                        id='phone_number' 
                        name='phoneNumber'
                        placeholder='Phone number' 
                        className='w-full p-2 border-2 outline-none rounded-md'
                        minLength='11'
                        required
                        value={user?.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <input 
                    type='submit' 
                    value='Submit' 
                    className='w-full bg-indigo-500 text-white text-bold p-2 rounded-md mt-2'
                />
            </form>
        </div>
    )
}

export default NotificationForm