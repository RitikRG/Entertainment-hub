import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { ExternalLink } from 'react-external-link';
import Castdata from './Castdata';


 
const singleContentStyle = {
    container: `bg-neutral-500 rounded-lg p-2 max-w-[220px] mx-auto flex flex-col justify-between hover:scale-110 duration-300 hover:bg-neutral-400`,
    img: `rounded-lg `,
    rating: `bg-main-red text-slate-50 absolute rounded-full p-1 text-sm -translate-x-3 -translate-y-3 `,
    name: `text-slate-50 font-semibold tracking-wide`,
    typendate: `flex justify-between capitalize text-sm font-semibold text-neutral-900 pt-3 `,
    modalContainer: `fixed z-10 p-3 h-[90vh] bg-neutral-500 duration-300 top-0 left-0 sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-[80vw] rounded-lg shadow-lg max-w-[800px] overflow-auto pb-28`,
    modalHeading: ` flex items-center justify-between pb-2`,
    modalContent: `sm:grid sm:grid-cols-2 sm:gap-x-2 w-full`,
    modalClose: `right-2`,
    modalBackdropImg: `rounded-lg shadow-md mx-auto sm:w-[400px]`,
    modalOverview: `bg-neutral-700 p-2 rounded-lg shadow-lg text-slate-50 text-sm mt-4 sm:text-xl sm:mt-0 `,
    btn:` bg-main-red text-slate-50 px-3 py-1 rounded-lg w-[150px] mx-auto sm:w-[300px] sm:text-xl`,
    
}


const SingleContentSearch = (props) => {

    const [modal, setModal] = useState(true);
    const [trailerData, setTrailerData] = useState(null);
    const [castData, setCastData] = useState(null);

    const handleModal = () => {
        setModal(!modal)
    }

    const fetchTrailer = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${props.c.media_type}/${props.c.id}/videos?api_key=81907546dc7f8132b6008e24baa966f6`);
        setTrailerData(data.results[0])
    }
    console.log(trailerData)
    useEffect(() => {
        fetchTrailer()
    }, [])
    const fetchCast = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${props.c.media_type}/${props.c.id}/credits?api_key=81907546dc7f8132b6008e24baa966f6`);
        setCastData(data.cast)
    }
    useEffect(() => {
        fetchCast()
    }, [])

    

    return (
        <>
            {props.c.vote_average>1 &&
            
            <>
            <div className={singleContentStyle.container} onClick={handleModal}>
                <div>
                    <div className={singleContentStyle.rating}>
                        <p>{props.c.vote_average.toFixed(1)}</p>
                    </div>
                    <div >
                        <img src={`https://image.tmdb.org/t/p/w500${props.c.poster_path}`}  className={singleContentStyle.img} />
                    </div>
                    <div className={singleContentStyle.name}>
                        <h3>{props.c.title}</h3>
                        <h3>{props.c.name}</h3>
                    </div>
                </div>

                <div className={singleContentStyle.typendate}>
                    <p>{props.c.media_type}</p>
                    <p>{props.c.release_date}</p>
                    <p>{props.c.first_air_date}</p>
                </div>

            </div>
            <div className={!modal ? singleContentStyle.modalContainer : `hidden`}>
                <div className={singleContentStyle.modalHeading}>
                    <p className='text-slate-50 font-semibold'>{props.c.title}</p>
                    <p className='text-slate-50 font-semibold'>{props.c.name}</p>
                    <div className={singleContentStyle.modalClose}>
                        <AiOutlineCloseCircle size={30} onClick={handleModal} />
                    </div>
                </div>
                <div className={singleContentStyle.modalContent} >
                    <div >
                        <img src={`https://image.tmdb.org/t/p/w500${props.c.backdrop_path}`}  className={singleContentStyle.modalBackdropImg} />
                    </div>
                    <div className={singleContentStyle.modalOverview}>
                        <p>{props.c.overview}</p>
                    </div>
                    <div className='text-center py-2 sm:col-span-2'>
                        {trailerData != null &&
                            <ExternalLink href={`https://www.youtube.com/watch?v=${trailerData.key}`}> <button className={singleContentStyle.btn}>Watch trailer</button> </ExternalLink>
                        }
                        {trailerData == null &&
                            <button className={singleContentStyle.btn}>Trailer not Available</button> 
                        }
                    </div>

                </div>
                <div className=' py-6 w-[320px] sm:w-[80%] mx-auto bg-neutral-900 rounded-lg'>
                    <h3 className='text-xl text-main-red text-center pb-6'>Cast Info</h3>
                    <div className='flex px-2 space-x-4 max-w-[280px] sm:w-[80%] sm:max-w-[800px] mx-auto overflow-x-scroll'>
                        {castData && castData.map((c)=>
                            <Castdata key={c.id} c={c}/>,
                           
                        )}
                    </div>
                </div>
            </div>
            </>
            }

        </>
    )
}

export default SingleContentSearch
