import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="git">
      <h2>Portfolio</h2>
      <nav>
        <ul class="nav">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <button>Download CV</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
