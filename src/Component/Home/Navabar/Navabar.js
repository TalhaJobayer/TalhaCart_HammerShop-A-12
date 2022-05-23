import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navabar.css'



const Navabar = () => {
    return (
    
      <Navbar bg="light" expand="lg">
      <Container className='mx-auto' fluid>
        <Navbar.Brand className='Logo' href="#">TalhaCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll
          >
        
          
       
       
     <div className="mainMenu">
     <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
       
        <li className="nav-item">
          <Link to='' className="nav-link active link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >Blog</Link>
        </li>
        <li className="nav-item ">
        <Link to='/Dashboard' className="nav-link active" aria-current="page">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to='' className="nav-link active" aria-current="page" >My profile</Link>
        </li>
        
        
        
      </ul>
     </div>
    </Nav>
          <Nav  className="me-0 "
            style={{ maxHeight: '150px' }}
            navbarScroll>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/logIn' className="nav-link active" aria-current="page" >Log In</Link>
        </li>
        <li className="nav-item">
          <Link to='/signUp' className="nav-link active" aria-current="page">Sign Up</Link>
        </li>
       
       </ul>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    );
};

export default Navabar;