import React, {useState, useEffect} from 'react';
import { AiFillFire } from 'react-icons/ai'
import axios from 'axios'
import SingleContent from '../singlecontent/SingleContent';



const trendingStyles ={
  heading:`text-2xl text-slate-50 font-seibold py-2 sm:py-3 text-center `,
  dataDisplayLayout: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-y-4 w-[98%] max-w-[1000px] mx-auto`,
  nonActiveLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-slate-50 hover:text-main-red border-t border-transparent hover:border-main-red pt-3 mr-4 px-2`,
  activeLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-main-red border-t border-main-red pt-3 mr-4 px-2`,
  paginationContainer:`w-[80%] max-w-[1000px] mx-auto flex justify-around items-center py-8 mt-4`,
}


const Trending = () => {

  const [pageCount, setPageCount] = useState(1);
  const [content, setContent] = useState([])
  
  


  const fetchTrending = async()=>{
    const {data}= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=81907546dc7f8132b6008e24baa966f6&page=${pageCount}`);

    console.log(data)
    setContent(data.results)
  }
  useEffect(()=>{
    fetchTrending()
    
  },[ pageCount])
  const handle =(e)=>{
    setPageCount(e.nativeEvent.target.innerText);
    fetchTrending()
    window.scroll(0,0)
  }

  

  return (
    <div className='pb-24'>
      <div className={trendingStyles.heading}>
       <AiFillFire className='inline'/> Trending <span className='text-main-red'> Section <AiFillFire className='inline'/></span>
        </div>
      <div className={trendingStyles.dataDisplayLayout}>
        {content && content.map((c)=>
          <SingleContent key={c.id} c={c}/>,
        )}
      </div>
      <div className={trendingStyles.paginationContainer}>
                

                    <div className="flex justify-between w-[80%] max-w-[1000px] mx-auto ">
                        <div onClick={handle} key='1'>
                            {pageCount == 1 && <p className={trendingStyles.activeLink}>1</p>}
                            {pageCount != 1 && <p className={trendingStyles.nonActiveLink}>1</p>}
                        </div>
                        <div onClick={handle} id='2'>
                            {pageCount == 2 && <p className={trendingStyles.activeLink}>2</p>}
                            {pageCount != 2 && <p className={trendingStyles.nonActiveLink}>2</p>}
                        </div>
                        <div onClick={handle} id='3'>
                            {pageCount == 3 && <p className={trendingStyles.activeLink}>3</p>}
                            {pageCount != 3 && <p className={trendingStyles.nonActiveLink}>3</p>}
                        </div>
                        <div onClick={handle} id='4'>
                            {pageCount == 4 && <p className={trendingStyles.activeLink}>4</p>}
                            {pageCount != 4 && <p className={trendingStyles.nonActiveLink}>4</p>}
                        </div>
                        <div onClick={handle} id='5'>
                            {pageCount == 5 && <p className={trendingStyles.activeLink}>5</p>}
                            {pageCount != 5 && <p className={trendingStyles.nonActiveLink}>5</p>}
                        </div>
                        <div onClick={handle} id='6'>
                            {pageCount == 6 && <p className={trendingStyles.activeLink}>6</p>}
                            {pageCount != 6 && <p className={trendingStyles.nonActiveLink}>6</p>}
                        </div>
                    </div>


                
      </div>
      
    </div>
  )
}

export default Trending
