import React, {useState, useEffect} from 'react';
import { BiMovie } from 'react-icons/bi'
import axios from 'axios'
import SingleContentMovie from '../singlecontent/SingleContentMovie';



const moviesStyles ={
  heading:`text-2xl text-slate-50 font-seibold py-2 sm:py-3 text-center `,
  dataDisplayLayout: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-y-4 w-[98%] max-w-[1000px] mx-auto`,
  nonActiveLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-slate-50 hover:text-main-red border-t border-transparent hover:border-main-red pt-3 mr-4 px-2`,
  activeLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-main-red border-t border-main-red pt-3 mr-4 px-2`,
  paginationContainer:`w-[80%] max-w-[1000px] mx-auto flex justify-around items-center py-8 mt-4`,
  sortBy: `bg-neutral-700 text-sm rounded-lg my-4 ml-2 text-slate-50`,

}


const Movies = () => {

  const [pageCount, setPageCount] = useState(1);
  const [content, setContent] = useState([]);
  const [sortby, setSortby] = useState('popular')




  const fetchMovie = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${sortby}?api_key=81907546dc7f8132b6008e24baa966f6&page=${pageCount}`);

    console.log(data)
    setContent(data.results)
  }
  useEffect(() => {
    fetchMovie()

  }, [pageCount, sortby])
  const handlePage = (e) => {
    setPageCount(e.nativeEvent.target.innerText);
    fetchMovie()
    window.scroll(0, 0)
  }
  const handleSort = (e) => {
    setSortby(e.target.value);
    fetchMovie()
    window.scroll(0, 0)
  }



  return (
    <div className='pb-24'>
      <div className={moviesStyles.heading}>
        <BiMovie className='inline' /> Movies<span className='text-main-red'> Section <BiMovie className='inline' /></span>
      </div>
        <div className='px-3 max-w-[1000px] mx-auto'>
          <select name="sortby" id="sortby" placeholder='Sort By' className={moviesStyles.sortBy} onChange={handleSort}>
            <option value="popular" selected>Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="now_playing">Now Playing</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
      <div className={moviesStyles.dataDisplayLayout}>
        {content && content.map((c) =>
          <SingleContentMovie key={c.id} c={c} />,
        )}
      </div>
      <div className={moviesStyles.paginationContainer}>


        <div className="flex justify-between w-[80%] max-w-[1000px] mx-auto ">
          <div onClick={handlePage} key='1'>
            {pageCount == 1 && <p className={moviesStyles.activeLink}>1</p>}
            {pageCount != 1 && <p className={moviesStyles.nonActiveLink}>1</p>}
          </div>
          <div onClick={handlePage} id='2'>
            {pageCount == 2 && <p className={moviesStyles.activeLink}>2</p>}
            {pageCount != 2 && <p className={moviesStyles.nonActiveLink}>2</p>}
          </div>
          <div onClick={handlePage} id='3'>
            {pageCount == 3 && <p className={moviesStyles.activeLink}>3</p>}
            {pageCount != 3 && <p className={moviesStyles.nonActiveLink}>3</p>}
          </div>
          <div onClick={handlePage} id='4'>
            {pageCount == 4 && <p className={moviesStyles.activeLink}>4</p>}
            {pageCount != 4 && <p className={moviesStyles.nonActiveLink}>4</p>}
          </div>
          <div onClick={handlePage} id='5'>
            {pageCount == 5 && <p className={moviesStyles.activeLink}>5</p>}
            {pageCount != 5 && <p className={moviesStyles.nonActiveLink}>5</p>}
          </div>
          <div onClick={handlePage} id='6'>
            {pageCount == 6 && <p className={moviesStyles.activeLink}>6</p>}
            {pageCount != 6 && <p className={moviesStyles.nonActiveLink}>6</p>}
          </div>
        </div>



      </div>

    </div>
  )
}

export default Movies
