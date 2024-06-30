import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <NavLink className='navbar-brand mx-2' to='/'>Bridge of Hope</NavLink>
      <div className="container-fluid" >
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false" activeClassName="active">
                Project Spectrum
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/autism">Autism</NavLink></li>
                <li><NavLink className="dropdown-item" to="/adhd">ADHD</NavLink></li>
                <li><NavLink className="dropdown-item" to="/dyslexia">Dyslexia</NavLink></li>
                <li><NavLink className="dropdown-item" to="/downsyndrome">Downsyndrome</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" activeClassName="active">Our Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/people" activeClassName="active">People</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactUs" activeClassName="active">Contact Us</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;