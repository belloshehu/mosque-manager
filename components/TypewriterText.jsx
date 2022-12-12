import React from 'react'
import {useTypewriter} from 'react-simple-typewriter'

const TypewriterText = ({wordList}) => {
    const [text, helper ]= useTypewriter({
        words: wordList,
        loop: 0
    })

    const { isType, isDelete, isDelay, isDone } = helper
    return (
        <div className='text-center md:text-left pb-0 mt-5 h-40 w-full bg-slate-0 opacity-70 duration-200 transition-all'>
            <h1 className=' text-black  text-5xl md:text-4xl font-extrabold align-bottom' >
                Welcome to 
            </h1>
            <h1 className='text-indigo-600  text-6xl md:text-5xl font-extrabold align-bottom'>
                {text}
                <span className='text-black text-md font-normal'>|</span>
            </h1>
        </div>
    )
}

export default TypewriterText