import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
     <Link style={{textDecoration: 'none'}} to="/home"> <a className="navbar-brand" >Food Campus</a> </Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ms-5 ">
          <Link className="navText" to="/home"> <a className="nav-link  navs" aria-current="page" >Home</a> </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/chinese"><a className="nav-link navs">Chinese</a></Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/thai"> <a className="nav-link navs">Thai</a> </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/mexican"> <a className="nav-link navs" >Mexican</a> </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/bangla"> <a className="nav-link navs" >Bangla</a> </Link>
        </li>
        <li className="nav-item ms-5">
          <Link className="navText" to="/contact"> <a className="nav-link navs" >Contact</a> </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navigation;