import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";


export default function Navbar() {
  const [open,setOpen]=useState(false);
  return (

    <nav className="navbar" >
      <h2 className="logo">Aishwarya</h2>
      <ul className={open ? "nav-links open" :"nav-links"}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    
    <div className="hamburger" onClick={()=> setOpen(!open)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </nav>
  );
}

