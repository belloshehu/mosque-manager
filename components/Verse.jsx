import React, {useState, useEffect} from 'react'
import Spinner from './Spinner'

const Verse = ({refresh}) => {
    const [verse, setVerse] = useState({
        dataEnglish: {},
        dataArabic: {},
    })

    const [loading, setLoading] = useState(true)

    const getData = async() =>{
        // return data for a verse in Arabic and English 

        const randomVerse = Math.floor(Math.random() * 6666)
        const response = await fetch(`https://api.alquran.cloud/v1/ayah/${randomVerse}/en.asad`)
        const dataEnglish = await response.json()

        const response2 = await fetch(`https://api.alquran.cloud/v1/ayah/${randomVerse}/ar.alafasy`)
        const dataArabic = await response2.json()

        // console.log(dataAudio.data)

        setVerse({
            ...verse,
            dataArabic: dataArabic.data, 
            dataEnglish: dataEnglish.data, 
        })
        setLoading(false)

    }

    useEffect(() => {
        getData()

    }, [refresh])
    
    if(loading){
        return (
            <div className='bg-slate-200 p-2 text-center rounded-md shadow-md'>
                <Spinner message='Loading verse...' />
            </div>
        )
    }
    return (
        <div className='bg-slate-200 p-2 my-2 text-center rounded-md shadow-md transition-all duration-200 '>
            {/* <div className='mx-auto my-2'>
                <audio controls autoPlay>
                    <source src={verse.dataArabic.audio} type='audio/mpeg' />
                </audio>
            </div> */}
            <p className='mb-2 text-3xl'>{verse.dataArabic?.text}</p>
            <p>{verse.dataEnglish.text}</p>
            <div className='bg-indigo-300 p-2 rounded-sm w-1/2 m-auto'>
                <strong>{verse.dataEnglish?.surah?.englishName} - {verse.dataEnglish?.numberInSurah}</strong>
            </div>
        </div>
    )
}

export default Verse