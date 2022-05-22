import React from 'react';
import { Link } from 'react-router-dom';
import './Navabar.css'



const Navabar = () => {
    return (
    
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to='' className="navbar-brand" href="#">TalhaCart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page">Blog</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >My profile</Link>
        </li>
        
        
        
      </ul>
      <div className="d-flex">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >Log In</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page">Sign Up</Link>
        </li>
       
       </ul>
      </div>
    </div>
  </div>
</nav>
   
    );
};

export default Navabar;