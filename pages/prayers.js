import React from 'react'
import Timetable from '../components/Timetable'
import { client } from '../lib/client'
import ClockWrapper from '../components/ClockWrapper'
import Prayer from '../components/Prayer'

const prayers = ({prayerData}) => {
  
  return (
    <div className='flex flex-col items-center gap-2'>
      <ClockWrapper />
      {/* <Timetable prayers={prayerData}/> */}
      {
        prayerData.map(prayer => <Prayer prayer={prayer}/>)
      }
    </div>
  )
}

export const getServerSideProps = async () =>{
  const prayerQuery = '*[_type=="prayer"] | order(position){_id, name, adhanTime, iqamaTime}'
  const prayerData = await client.fetch(prayerQuery)

  return {
    props: {
      prayerData
    }
  }
}

export default prayers