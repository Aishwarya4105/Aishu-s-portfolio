import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Aishwarya</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Education">Education</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

