import React, {useState} from 'react'
import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'
import { client } from '../lib/client'
import { FaClock, FaUser } from 'react-icons/fa'

const Program = ({title, description, image, lecturer,}) => {
    const [readMore, setReadMore] = useState(false)
    const imageProps = useNextSanityImage( client, image[0])
    const [text, setText] = useState(description)

    const handleClick = () =>{
        setReadMore(prev => !prev)
        
        if(readMore){
            const str = text.split(' ').slice(0, 10).join(' ') + '...'
            setText(str)
        }else{
            setText(description)
        }
    }

    return (
        <div className='flex flex-col justify-between bg-slate-200 rounded-md shadow-md my-5'>
            <Image {...imageProps}  className='rounded-t-md w-full h-[200px]' alt={title}/>
            <div className='p-2 md:p-5 h-auto'>
                <h3 className='text-xl font-bold my-2 text-slate-500'>{title}</h3>
                <div className='flex gap-3 items-center justify-center bg-slate-300 rounded-md shadow-sm m-3'>
                    <FaUser/>
                    <p className='text-slate-400'>Lecturer: {lecturer || 'Unknown'}</p>
                </div>
                <p>{text.slice(0, 50)}...</p>     
                <button className='p-2 mt-4 rounded-md bg-indigo-600 
                    text-white shadow-md w-full transition-all duration-200
                    ease-linear hover:bg-indigo-500'>more ...</button>
            </div>
        </div>
    )
}

export default Program