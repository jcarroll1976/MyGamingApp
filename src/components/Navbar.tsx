import React, { useState } from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

import { AiOutlineHome } from 'react-icons/ai';
import { CiSearch } from "react-icons/ci";
import { CiCalendarDate } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [nav,setNav] = useState(false);

    function handleNav() {
        setNav(!nav);
    }

  return (
    <div className='navbar'>
    {/*Left Side*/}
        <div>
            <h1><Link to="/">Josh's Game Hub</Link></h1>
        </div>

    {/*Right Side*/}
        <div>
            <ul className='navbarList'>
                <Link to="/"><li className='navbarlistItem'>Home</li></Link>
                <Link to="/search"><li className='navbarlistItem'>Search</li></Link>
                <Link to="/releases"><li className='navbarlistItem'>Release Schedule</li></Link>
            </ul>
        </div>
        <GiHamburgerMenu onClick={handleNav} color='#fff' className="mobile-nav" />
        {nav ? (
            <div className="mobile-div">
                        <div>
                            <Link to = {"/"} className="mobile-link" onClick={handleNav}><AiOutlineHome className="mobile-icom" size={20} /><span>Home</span></Link>
                            <Link to = {"/search"} className="mobile-link" onClick={handleNav}><CiSearch className="mobile-icom" size={20} /><span>Search</span></Link>
                            <Link to = {"/releases"} className="mobile-link" onClick={handleNav}><CiCalendarDate className="mobile-icom" size={20} /><span>Release Schedule</span></Link>
                        </div>
            
                </div>
            ) : (
                ""
            )} 

    
    </div>
  )
}
