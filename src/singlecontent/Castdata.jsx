import React from 'react'
import NotAvailable from '../assets/notavailable.webp'





const Castdata = (props) => {
    return (
        <>
        {props.c!=null &&
        <div className='flex-none rounded-lg py-4 px-2 my-2 bg-neutral-400 w-[120px]  mx-auto space-y-2'>
            <div>
                {props.c.profile_path!=null && 
                <img src={`https://image.tmdb.org/t/p/original${props.c.profile_path}`} className='h-[120px] mx-auto border-2 border-neutral-900 rounded-lg object-contain'/>
                }
                {props.c.profile_path==null && 
                <img src={NotAvailable} className='h-[120px] mx-auto border-2 border-neutral-900 rounded-lg object-contain'/>
                }
                <p className='text-main-red text-center font-semibold tracking-wide py-2'> {props.c.name}</p>
            </div>

        </div>
        }
        {props.c==null&&
        <div className='hidden'></div>

        }

        
        </>
    )
}

export default Castdata
