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
    {/*Middle*/}
        <div>
            <input type="text" placeholder='Search games...' />
        </div>
    {/*Right Side*/}
        <div>
            <ul className='navbarList'>
                <li className='navbarlistItem'>Login</li>
                <li className='navbarlistItem'>Sign Up</li>
            </ul>
        </div>
    </div>
  )
}
