import React from 'react'
import { FaPray } from 'react-icons/fa'
import { HiSpeakerphone } from 'react-icons/hi'
import PrayerTime from './PrayerTime'

const Timetable = ({prayers}) => {
  return (
    <>
        <div className='w-full md:w-2/3 grid grid-rows-7 grid-cols-1 bg-slate-300 border border-red-1 text-white p-2 rounded-md content-center '>
            {/*  row 1 */}
            <div className='grid grid-cols-3 grid-rows-1 items-center text-xl justify-start'>
                <div className='border-r-2 border-slate-500 flex items-center gap-2 justify-center'>
                    <h2>Prayer</h2>
                </div>
                
                <div className='border-r-2 border-slate-500 flex items-center gap-2 justify-center'>
                    <HiSpeakerphone />
                    <h2>Adhaan</h2>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <FaPray />
                    <h2 className='text-center'>Iqaama</h2>
                </div>
            </div>
            {
                prayers.map(prayer => <PrayerTime {...prayer} key={prayer?._id}/>)
            }
        </div>
    </>

  )
}

export default Timetable