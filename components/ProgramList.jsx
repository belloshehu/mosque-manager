import React from 'react'
import Program from './Program'


const ProgramList = ({programs}) => {

  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
       {
            programs.map(program => <Program {...program} key={program._id}/>)
        }
    </div>
  )
}

export default ProgramList