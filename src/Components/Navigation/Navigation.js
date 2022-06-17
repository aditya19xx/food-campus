import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand" href="#">Food Campus</a>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-5 ">
          <Link className="navText" to="/home"> <a className="nav-link  navs" aria-current="page" href="#">Home</a> </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/"><a className="nav-link navs" href="#">Link</a></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/recipe"> <a className="nav-link navs" href="#">Recipe</a> </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/about"> <a className="nav-link navs" href="#">About Us</a> </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;