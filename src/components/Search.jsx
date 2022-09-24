import React, { useState, useEffect } from 'react';
import { BiSearch } from 'react-icons/bi'
import axios from 'axios'
import SingleContentSearch from '../singlecontent/SingleContentSearch';




const searchStyles = {
  heading: `text-2xl text-slate-50  font-seibold py-2 text-center space-y-2 `,
  input:`text-xl px-3 py-1 rounded-lg max-w-[200px] text-main-red`,
  dataDisplayLayout: `grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-y-4 w-[98%] max-w-[1000px] mx-auto`,
  nonActiveLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-slate-50 hover:text-main-red border-t border-transparent hover:border-main-red pt-3 mr-4 px-2`,
  activeLink: `text-sm sm:text-lg font-medium leading-none cursor-pointer text-main-red border-t border-main-red pt-3 mr-4 px-2`,
  paginationContainer: `w-[80%] max-w-[1000px] mx-auto flex justify-around items-center py-8 mt-4`,
  sortBy: `bg-neutral-700 text-sm rounded-lg my-4 ml-2 text-slate-50`,
}


const Search = () => {

  const [pageCount, setPageCount] = useState(1);
  const [search, setSearch] = useState('trending');
  const [results, setResults] = useState([])
  
  const fetchSearch = async () => {
    if(search==''){
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=81907546dc7f8132b6008e24baa966f6&query=trending&page=${pageCount}`);
      console.log(data.results)
      setResults(data.results)
    }else{
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=81907546dc7f8132b6008e24baa966f6&query=${search}&page=${pageCount}`);
      console.log(data.results)
      setResults(data.results)
    }
    
  }
  
  console.log(search)
  useEffect(() => {
    fetchSearch()
  }, [pageCount, search])
  
  const handlePage = (e) => {
    setPageCount(e.nativeEvent.target.innerText);
    fetchSearch()
    window.scroll(0, 0)
  }
  const handleSearch = (e) => {
    console.log(e.nativeEvent.target.value)
    setSearch(e.nativeEvent.target.value)
    fetchSearch()
    window.scroll(0, 0)
  }
  



  return ( 
    <>
   
    <div className={searchStyles.heading}>
      <h4>Search <span className='text-main-red'>Section <BiSearch className='inline'/> </span></h4>
      <input placeholder='Search' type="text" onChange={handleSearch} className={searchStyles.input}/>
    </div> 

    <div className={searchStyles.dataDisplayLayout}>
        {results && results.map((c)=>
          <SingleContentSearch key={c.id} c={c}/>,
        )}
    </div>


      <div className={searchStyles.paginationContainer}>
        <div className="flex justify-between w-[80%] max-w-[1000px] mx-auto ">
          <div onClick={handlePage} key='1'>
            {pageCount == 1 && <p className={searchStyles.activeLink}>1</p>}
            {pageCount != 1 && <p className={searchStyles.nonActiveLink}>1</p>}
          </div>
          <div onClick={handlePage} id='2'>
            {pageCount == 2 && <p className={searchStyles.activeLink}>2</p>}
            {pageCount != 2 && <p className={searchStyles.nonActiveLink}>2</p>}
          </div>
          <div onClick={handlePage} id='3'>
            {pageCount == 3 && <p className={searchStyles.activeLink}>3</p>}
            {pageCount != 3 && <p className={searchStyles.nonActiveLink}>3</p>}
          </div>
          <div onClick={handlePage} id='4'>
            {pageCount == 4 && <p className={searchStyles.activeLink}>4</p>}
            {pageCount != 4 && <p className={searchStyles.nonActiveLink}>4</p>}
          </div>
          <div onClick={handlePage} id='5'>
            {pageCount == 5 && <p className={searchStyles.activeLink}>5</p>}
            {pageCount != 5 && <p className={searchStyles.nonActiveLink}>5</p>}
          </div>
          <div onClick={handlePage} id='6'>
            {pageCount == 6 && <p className={searchStyles.activeLink}>6</p>}
            {pageCount != 6 && <p className={searchStyles.nonActiveLink}>6</p>}
          </div>
        </div>



      </div>

    </>
  )
}

export default Search

