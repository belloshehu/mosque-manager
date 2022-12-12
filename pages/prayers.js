import React, {useState, useEffect} from 'react'
import Timetable from '../components/Timetable'
import { client } from '../lib/client'
import Spinner from '../components/Spinner'
import Prayer from '../components/Prayer'

const Prayers = ({prayerData}) => {
  
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if(prayerData){
      setLoading(false)
    }else{
      setLoading(true)
    }
  }, [prayerData])
  
  if(loading){
    return(
      <div>
        <Spinner message={'Please wait ...'}/>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center gap-3'>
      {/* <ClockWrapper /> */}
      {/* <Timetable prayers={prayerData}/> */}
      {
        prayerData.map(prayer => <Prayer prayer={prayer} key={prayer._id}/>)
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

export default Prayers