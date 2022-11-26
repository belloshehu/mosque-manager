import { client } from '../lib/client'
import styles from '../styles/Home.module.css'
import { urlFor } from '../lib/client'
import { FaCity,} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import Timetable from '../components/Timetable'

const Home = ({mosqueData, prayerData}) => {
  const {name, image, city, country, address} = mosqueData[0]
  console.log(image)
  return (
    <div className='flex flex-col items-center justify-center bg-slate-00 py-5 gap-3'>
      <img src={urlFor(image[0])} alt={name} className='w-2/6 h-2/6'/>
      <h1 className='text-center text-gray-500 text-lg font-extrabold bg-slate-200 p-5 mt-5 w-full md:w-1/2'>{`${name} mosque`  || 'Mosque name'}</h1>
      <div className='shadow-sm flex flex-col gap-2 justify-center w-full p-2 md:w-2/3 md:flex-row md:p-5 bg-slate-100 '>
          <p className='flex gap-2 items-center bg-slate-200 p-2'><MdLocationOn className='text-indigo-300'/> {address}</p>
          <p className='flex gap-2 items-center bg-slate-200 p-2'><FaCity className='text-indigo-300'/> {city}</p>
          <p className='flex gap-2 items-center bg-slate-200 p-2'><FaCity className='text-indigo-300'/> {country}</p>
      </div>
      <Timetable prayers={prayerData}/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type== "mosque"]'
  const mosqueData = await client.fetch(query)

  // prayers 
  const prayerQuery = '*[_type=="prayer"] | order(position){_id, name, adhanTime, iqamaTime}'
  const prayerData = await client.fetch(prayerQuery)

  return {
    props:{
      mosqueData, 
      prayerData
    }
  }
}

export default Home