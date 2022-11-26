import React from 'react'

const PrayerTime = ({adhanTime, iqamaTime, name}) => {
  return (
    <div className='bg-slate-100 my-2 shadow-md grid grid-cols-3 grid-rows-1 p-2 rounded-md text-slate-700 hover:scale-102 transition-all duration-200'>
       
        {/*  col 1 */}
        <div className='text-xl bg-slate-100 border-r-2 border-slate-2'>
            <h3>{name}</h3>
        </div>

        {/* col 2 */}
        <div className='bg-slate-100 border-r-2 border-slate-2'>
            <p>{adhanTime.split('T')[1].split('.')[0].slice(0, 5)}</p>
        </div>

        {/*  col 3 */}
        <div className='bg-slate-100 text-center'>
            <p className=''>{iqamaTime.split('T')[1].split('.')[0].slice(0, 5)}</p>
        </div>
    </div>
  )
}

export default PrayerTime