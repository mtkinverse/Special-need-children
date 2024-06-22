import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
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
                About
              </NavLink>
              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/developers">Developers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/organizations">Organization</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/adhd" activeClassName="active">ADHD</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/autism" activeClassName="active">Autism</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dyslexia" activeClassName="active">Dyslexia</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/downsyndrome" activeClassName="active">Downsyndrome</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Cerebral-palsy">Cerebral Palsy</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;