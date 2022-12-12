import React, {useState, useEffect} from 'react'
import { FaBookOpen } from 'react-icons/fa'
import { HiRefresh } from 'react-icons/hi'
import Verse from '../components/Verse'

const Learning = () => {
    const [refresh, setRefresh] = useState(false)

    const handleClick = ()=>{
        setRefresh(prev => !prev)
    }

    return (
        <div className='p-2 md:p-5 text-center mb-2'>
            <div className='flex flex-col gap-2 items-center justify-center mb-5'>
                <FaBookOpen className='text-5xl text-indigo-500 rounded-md bg-slate-200 shadow-lg p-2' size={50} />
                <h3 className='text-3xl text-indigo-500 font-bold'>Learning</h3>
                <button 
                    className='gap-2 bg-indigo-400 flex px-4 py-2 shadow-sm items-center rounded-md text-slate-300 hover:scale-103 transition-all duration-200'
                    onClick={handleClick}
                >
                    <HiRefresh /> Another verse
                </button>
            </div>
            <Verse refresh={refresh} />
        </div>
    )
}

export default Learning