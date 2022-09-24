import React, { useState } from 'react';
import { Link, link } from 'react-router-dom'
import { AiFillFire } from 'react-icons/ai'
import { BiMovie } from 'react-icons/bi'
import { FiMonitor, FiSearch } from 'react-icons/fi'



import { AiOutlineMenuFold, AiOutlineCloseCircle } from 'react-icons/ai'

const navstyle = {
    outsidecontainer: `py-3 px-2 w-full shadow-md bg-neutral-900 text-slate-50`,
    container: `flex justify-between items-center max-w-[1000px] mx-auto rounded-lg`,
    logocontainer: `text-2xl text-center md:text-left font-semibold sm:text-3xl w-full`,
    navlinkcontainer: ` flex justify-between items-center space-x-2 md:w-[400px] `,
    navlinks: `font-semibold tracking-[1px] hover:scale-110 duration-300 hover:text-main-red md:text-lg`,
    bottomNavContainer: `fixed z-30 w-[100vw] max-w-[700px] left-1/2 -translate-x-1/2 bottom-0 bg-neutral-900 py-4 text-md sm:text-lg text-slate-50 grid grid-cols-4 rounded-lg`,
    bottomNavLinks: `text-center w-full`,
}





const Navbar = () => {
    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <>
            <div className={navstyle.outsidecontainer}>
                <div className={navstyle.container}>
                    <div className={navstyle.logocontainer}>
                        <Link to='/'>

                        <p className='text-slate-50'>Entertainment<span className='text-main-red ml-1'>Hub</span></p>
                        </Link>
                    </div>
                    <div className='hidden md:inline'>
                        <ul className={navstyle.navlinkcontainer}>
                            <li className={navstyle.navlinks}><Link to='/'>Home</Link></li>
                            <li className={navstyle.navlinks}><Link to='/'>Hollywood</Link></li>
                            <li className={navstyle.navlinks}><Link to='/'>Bollywood</Link></li>
                        </ul>
                    </div>



                </div>


            </div>
            <div className={navstyle.bottomNavContainer}>
                <Link to='/trending'><div className={navstyle.bottomNavLinks}>
                    <p className='flex justify-around'><AiFillFire size={30} /></p>
                    <p>Trending</p>
                </div></Link>
                <Link to='/movies'><div className={navstyle.bottomNavLinks}>
                    <p className='flex justify-around'><BiMovie  size={30}/></p>
                    <p>Movies</p>
                </div></Link>
                <Link to='/tvseries'><div className={navstyle.bottomNavLinks}>
                    <p className='flex justify-around'><FiMonitor  size={30}/></p>
                    <p>Tv Series</p>
                </div></Link>
                <Link to='/search'><div className={navstyle.bottomNavLinks}>
                    <p className='flex justify-around'><FiSearch  size={30}/></p>
                    <p>Search</p>
                </div></Link>
            </div>
        </>

    )
}

export default Navbar
