import React , {useContext} from 'react'
import { MediumContext } from '../context/MediumContext';

const Search = ({start , last , switch1}) => {

    const { setdes , setret  } = useContext(MediumContext)
    function hundleDep(e){
           setdes(e.target.value);
    }
    function hundleRet(e){
        setret(e.target.value);
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='searchbar' >
            <h1 className='happy'>Happy   Journey</h1>
                <h1 className='journey' >Let start Journey</h1>
                <div className='search' >
                 
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place' >From</p>
                        <input type="text" onChange={(e)=>{start(e.target.value)}}  placeholder='Enter city' className='border-b-4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place' >To</p>
                        <input type="text" onChange={(e)=>{last(e.target.value)}} placeholder='Enter city' className='border-b-4 ' />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place' >Depart</p>
                        <input type="date" className='border-b-4 ' onChange={hundleDep} />
                    </div>
                    <div className='flex flex-col items-center justify-center mx-3 '>
                        <p className='place' >Return</p>
                        <input type="date" className='border-b-4 ' onChange={hundleRet} />
                    </div>

                    <button className='searchflight ' onClick={switch1} >
                        SEARCH
                    </button>
                 
                </div>
                <h1 className='hope' >Hope you make millions of amazing memories</h1>
            </div>
        </div>
    )
}

export default Search
