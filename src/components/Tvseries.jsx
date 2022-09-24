
import React, {useState, useEffect} from 'react';
import { FiMonitor} from 'react-icons/fi'
import axios from 'axios'
import SingleContentTv from '../singlecontent/SingleContentTv';



const tvStyles ={
  heading:`text-2xl text-slate-50 font-seibold py-2 sm:py-3 text-center `,
  dataDisplayLayout: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-y-4 w-[98%] max-w-[1000px] mx-auto`,
  nonActiveLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-slate-50 hover:text-main-red border-t border-transparent hover:border-main-red pt-3 mr-4 px-2`,
  activeLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-main-red border-t border-main-red pt-3 mr-4 px-2`,
  paginationContainer:`w-[80%] max-w-[1000px] mx-auto flex justify-around items-center py-8 mt-4`,
  sortBy: `bg-neutral-700 text-sm rounded-lg my-4 ml-2 text-slate-50`,
}


const Tvseries = () => {

  const [pageCount, setPageCount] = useState(1);
  const [content, setContent] = useState([]);
  const [sortby, setSortby] = useState('popular')
  
  


  const fetchTv = async()=>{
    const {data}= await axios.get(`https://api.themoviedb.org/3/tv/${sortby}?api_key=81907546dc7f8132b6008e24baa966f6&page=${pageCount}`);

   
    setContent(data.results)
  }
  useEffect(()=>{
    fetchTv()
    
  },[ pageCount, sortby])
  console.log(content)
  const handle =(e)=>{
    setPageCount(e.nativeEvent.target.innerText);
    fetchTv()
    window.scroll(0,0)
  }
  const handleSort = (e) => {
    setSortby(e.target.value);
    fetchTv()
    window.scroll(0, 0)
  }

  

  return (
    <div className='pb-24'>
      <div className={tvStyles.heading}>
       <FiMonitor className='inline'/> Tv <span className='text-main-red'> Series <FiMonitor className='inline'/></span>
        </div>
        <div className='px-3 max-w-[1000px] mx-auto'>
          <select name="sortby" id="sortby" placeholder='Sort By' className={tvStyles.sortBy} onChange={handleSort}>
            <option value="popular" selected>Popular</option>
            <option value="top_rated">Top Rated</option>
          </select>
        </div>
      <div className={tvStyles.dataDisplayLayout}>
        {content && content.map((c)=>
          <SingleContentTv key={c.id} c={c}/>,
        )}
      </div>
      <div className={tvStyles.paginationContainer}>
                

                    <div className="flex justify-between w-[80%] max-w-[1000px] mx-auto ">
                        <div onClick={handle} key='1'>
                            {pageCount == 1 && <p className={tvStyles.activeLink}>1</p>}
                            {pageCount != 1 && <p className={tvStyles.nonActiveLink}>1</p>}
                        </div>
                        <div onClick={handle} id='2'>
                            {pageCount == 2 && <p className={tvStyles.activeLink}>2</p>}
                            {pageCount != 2 && <p className={tvStyles.nonActiveLink}>2</p>}
                        </div>
                        <div onClick={handle} id='3'>
                            {pageCount == 3 && <p className={tvStyles.activeLink}>3</p>}
                            {pageCount != 3 && <p className={tvStyles.nonActiveLink}>3</p>}
                        </div>
                        <div onClick={handle} id='4'>
                            {pageCount == 4 && <p className={tvStyles.activeLink}>4</p>}
                            {pageCount != 4 && <p className={tvStyles.nonActiveLink}>4</p>}
                        </div>
                        <div onClick={handle} id='5'>
                            {pageCount == 5 && <p className={tvStyles.activeLink}>5</p>}
                            {pageCount != 5 && <p className={tvStyles.nonActiveLink}>5</p>}
                        </div>
                        <div onClick={handle} id='6'>
                            {pageCount == 6 && <p className={tvStyles.activeLink}>6</p>}
                            {pageCount != 6 && <p className={tvStyles.nonActiveLink}>6</p>}
                        </div>
                    </div>


                
      </div>
      
    </div>
  )
}



export default Tvseries
