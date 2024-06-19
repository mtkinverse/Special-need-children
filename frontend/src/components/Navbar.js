import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">Developers</Link></li>
                <li><Link className="dropdown-item" to="/">organization</Link></li>
                <li><hr className="dropdown-divider" /></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/adhd">ADHD</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/autism">Autism</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dyslexia">Dyslexia</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/downsyndrome">Downsyndrome</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cerebral-palsy">Cerebral Palsy</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;