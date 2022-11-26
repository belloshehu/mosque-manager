import React from 'react'
import ClockWrapper from './ClockWrapper'
import {GiPrayer} from 'react-icons/gi'
import {HiSpeakerphone} from 'react-icons/hi'
import { FaClock } from 'react-icons/fa'

const Prayer = ({prayer}) => {
  return (
    <div className='w-full md:w-2/3 grid grid-rows-2 grid-cols-1 bg-slate-300 hover:bg-slate-200 shadow-md transition-all duration-200 border border-red-1 text-white p-2 rounded-md content-center'>
        {/*  row 1 */}
        <div className='grid grid-cols-2 grid-rows-1 items-center text-xl justify-start'>
            <div><h2 className='border-r-2 border-slate-500 text-4xl font-extrabold text-slate-600'>{prayer.name}</h2></div>
            <div>{<ClockWrapper className='text-sm' timeSize={'text-2xl md:text-5xl'}/>}</div>
        </div>

        <div className='bg-slate-200 flex flex-col gap-1 p-2 rounded-md gap-y-2 text-slate-900 justify-center text-center'>
             
             {/*  row 1 */}
            <div className='grid grid-cols-2 border-b-2 border-slate-0'>
                <div className='flex items-center gap-2 text-xl bg-slate-100 p-2 justify-center'>
                    <HiSpeakerphone/> 
                    <h3>Adhan</h3>
                </div>
                <div className='bg-slate-100 flex items-center gap-2 justify-center'>
                    <FaClock className='text-2xl'/>
                    <p>{prayer.adhanTime.split('T')[1].split('.')[0].slice(0, 5)}</p>
                </div>
            </div>

            {/*  row 2 */}

            <div className='grid grid-cols-2'>
                <div className='flex items-center gap-2 text-xl bg-slate-100 p-2 justify-center'>
                    <GiPrayer/> <h3>Iqaama</h3>
                </div>
                <div className='bg-slate-100 flex items-center gap-2 justify-center'>
                    <FaClock className='text-2xl'/>
                    <p className='text-left'>{prayer.iqamaTime.split('T')[1].split('.')[0].slice(0, 5)}</p>
                </div>
            </div>
        </div>
        
        {/* <div className='bg-indigo-600 p-2   mb-2'>
            <h5 className='text-slate-500 text-xl '>Imams:</h5>
            <ul className='flex flex-wrap gap-1 items-center list-none'>
                <li className='bg-indigo-400 text-sm rounded-sm p-2 text-left '>Aliyu musa</li>
                <li className='bg-indigo-400 text-sm rounded-sm p-2 text-left '>Aliyu musa</li>

            </ul>
            
        </div> */}
    </div>
  )
}

export default Prayer