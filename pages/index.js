import { client, urlFor } from '../lib/client'
import styles from '../styles/Home.module.css'
import { FaCity, FaFlag,} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import Timetable from '../components/Timetable'
import { useState, useEffect } from 'react'
import Spinner from '../components/Spinner'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import {useTypewriter} from 'react-simple-typewriter'
import TypewriterText from '../components/TypewriterText'
import ProgramList from '../components/ProgramList'
import Link from 'next/link'


const Home = ({mosqueData, prayerData, programData}) => {
  const {name, image, city, country, address} = mosqueData[0]    
  const [loading, setLoading] = useState(true)
  console.log(image[0])
  const imageProps = useNextSanityImage(
		client,
		image[0]
	);

  useEffect(() => {
    if(prayerData && mosqueData){
      setLoading(false)
    }else{
      setLoading(true)
    }
  }, [prayerData, mosqueData])

  if(loading){
    return(
      <div>
        <Spinner message={'Please wait ...'}/>
      </div>
    )
  }

  return (
    <div className='relative flex flex-col items-center justify-center bg-slate-00 py-5 px-0 gap-0 transition-all duration-200'>    
      
        <div className='flex flex-col justify-center md:flex-row md:gap-2 gap-4 w-full md:px-5 py-5 pb-20'>
          <div className='md:w-1/2 w-full p-0' >
            <TypewriterText  wordList={[`${name} mosque `]}  className='text-5xl md:2xl'/>
            <p className='text-center md:text-left text-slate-600 pt-5 md:pt-0 md:pr-5'>
              We help you minimize missing of prayers and program bykeeping you upto date with prayer time, programs and events.
            </p>
          </div>
          <Image 
              {...imageProps} 
              // layout='responsive'
              alt={name} 
              className='rounded-lg shadow-lg md:w-1/2  w-full h-[200px] md:h-[300px]'
            
            />
        </div>

      <div className='bg-indigo-400 w-full flex flex-col items-center h-fit p-5 py-10'>
        <h3 className='text-3xl text-white font-extrabold'>Prayer Time table</h3>
        <p className='text-black my-5'>Upto date timetable for five daily prayers.</p>
        <Timetable prayers={prayerData}/>
      </div>

      <div className='bg-indigo-700 w-full flex flex-col items-center h-fit p-5 py-10'>
        <h3 className='text-3xl text-white font-extrabold'>Programs</h3>
        <p className='text-slate-300 my-5'>Various programs for adults and children</p>
        <ProgramList programs={programData} />
        <Link className='p-2 round shadow-lg text-white bg-black w-full rounded-md' href={'./programs'}>more ...</Link>
      </div>

      
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type== "mosque"]'
  const mosqueData = await client.fetch(query)

  const programQuery = '*[_type== "program"] | order(date){_id, title, description, lecturer, image}'
  const programData = await client.fetch(programQuery)

  // prayers 
  const prayerQuery = '*[_type=="prayer"] | order(position){_id, name, adhanTime, iqamaTime}'
  const prayerData = await client.fetch(prayerQuery)

  return {
    props:{
      mosqueData, 
      prayerData,
      programData,
    }
  }
}

export default Home