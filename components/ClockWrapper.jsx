import React, {useState, useEffect} from 'react'
import Clock from 'react-live-clock'

const ClockWrapper = ({timeSize}) => {
  const [ticking, setTicking] = useState(true)
  const [format, setFormat] = useState('h:mm:ss')

  useEffect( ()=>{
      setFormat('h:mm:ss')
      setTicking(true)
  }, [])
  
  return (
    <div className='w-50 h-full m-auto my-5'>
        {/* <p>Time:</p>  */}
        <Clock className={`w-20 h-20 font-extrabold ${timeSize? timeSize: ''} text-indigo-300`}
          ticking={ticking}
          format={format}/>
    </div>
  )
}

export default ClockWrapper