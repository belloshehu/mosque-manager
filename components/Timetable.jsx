import React from 'react'

const Timetable = ({prayers}) => {
  return (
    <div className='m-auto'>
        <table className='table-auto p-5 border text-xl shadow-lg text-slate-500'>
            <thead className='bg-slate-300'>
                <tr className=''>
                    <th className='border border-slate-300 p-3 text-center'>Prayer</th>
                    <th className='border border-slate-300 p-3 text-center'>Adhan Time</th>
                    <th className='border border-slate-300 p-3 text-center'>Iqaama Time</th>
                </tr>
            </thead>
            <tbody>
                {
                   
                   prayers.map(prayer =>
                    <tr className='border border-slate-300 p-3 text-center hover:bg-slate-100'>
                        <td className='border border-slate-300 p-3 text-center'>{prayer.name.charAt(0).toUpperCase() + prayer.name.slice(1)}</td>
                        <td className='border border-slate-300 p-3 text-center'>{prayer.adhanTime.split('T')[1].split('.')[0].slice(0, 5)}</td>
                        <td className='border border-slate-300 p-3 text-center'>{prayer.iqamaTime.split('T')[1].split('.')[0].slice(0, 5)}</td>
                    </tr>
                   ) 
                }
            </tbody>
        </table>
    </div>
  )
}

export default Timetable