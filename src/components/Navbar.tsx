import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
    {/*Left Side*/}
        <div>
            <h1><Link to="/">Josh's Games</Link></h1>
        </div>

    {/*Right Side*/}
        <div>
            <ul className='navbarList'>
                <Link to="/search"><li className='navbarlistItem'>Search</li></Link>
                <Link to="/releases"><li className='navbarlistItem'>Release Schedule</li></Link>
                <Link to="/favorites"><li className='navbarlistItem'>Favorites</li></Link>
            </ul>
        </div>
    </div>
  )
}
