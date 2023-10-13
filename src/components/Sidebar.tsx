import React from 'react'
import {SlPresent} from "react-icons/sl";
import {HiRectangleStack} from "react-icons/hi2"
import {BsPeopleFill} from "react-icons/bs"
import "./Sidebar.css"


function Sidebar() {
  return (
    <div>
        <h2>Home</h2>
        <h2>Reviews</h2>
        <h3>gamerjc1976</h3>
        <p><SlPresent />Waitlist</p>
        <p><HiRectangleStack />My Library</p>
        <p><BsPeopleFill />People You Follow</p>
    </div>
  )
}

export default Sidebar