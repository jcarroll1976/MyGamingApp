import React from 'react';
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className='navbar'>
    {/*Left Side*/}
        <div>
            <h1>Josh's Games</h1>
        </div>
        <div>
            <input type="text" placeholder='Search games...' />
        </div>
    </div>
  )
}
