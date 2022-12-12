import React, {useState, useEffect} from 'react'
import { FaTable } from 'react-icons/fa'
import Program from '../components/Program'
import ProgramList from '../components/ProgramList'
import Spinner from '../components/Spinner'
import { client } from '../lib/client'

const Programs = ({programData}) => {
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    if(programData){
      setLoading(false)
    }else{
      setLoading(true)
    }
  }, [programData])

  if(loading){
    return(
      <div>
        <Spinner message={'Programs will be added soon'}/>
      </div>
    )
  }
  return (
    <div className='p-2 md:p-5'>
        <h3 className='text-3xl text-indigo-500 font-bold flex flex-col gap-2 justify-center items-center m-2'>
          <FaTable className='rounded-md bg-slate-200 shadow-lg p-2' size={50}/> Programs
        </h3>
          {
            programData.length > 0? 
            <ProgramList programs={programData}/>:
            <h2>No programs yet {programData.length}</h2>
          }
    </div>
  )
}

export const getServerSideProps = async () =>{
  const query = '*[_type== "program"] | order(date){_id, title, description, lecturer, image}'
  const programData = await client.fetch(query)

  return {
    props: {
      programData
    }
  }
}
export default Programs