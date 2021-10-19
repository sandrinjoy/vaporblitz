import { ButtonGroup,Button, Image, NavDropdown,Navbar, Container, Nav } from "react-bootstrap";
import React,{useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import { Link,NavLink } from "react-router-dom";

import logo from "./../assets/logo.png"
import {FaTwitter,FaInstagram,FaYoutube,FaDiscord,FaTelegramPlane} from 'react-icons/fa'
import { useLocation } from 'react-router-dom';
function MyNavbar() {
   
   
return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className=" sticky-top bg-nav"
      >
        <Container className="d-flex  "> 
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand >
            <img height="54" src={logo} alt="logo of vb"/>
           
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="me-auto">
    <NavLink
      exact
      activeClassName="nav-hover-active"
      className="nav-hover nav-link active mx-2 fs-5  my-auto"
      to="/"
    >
      Marketplace
    </NavLink>
    <NavLink
      exact
      activeClassName="nav-hover-active"
      className="nav-hover nav-link active mx-2 fs-5  my-auto"
      to="/teams"
    >
      Whitepaper
    </NavLink>
    <NavLink
      exact
      activeClassName="nav-hover-active"
      className="nav-hover nav-link active mx-2 fs-5  my-auto"
      to="/shop"
    >
      PVP
    </NavLink>
      
    <NavLink
      exact
      activeClassName="nav-hover-active"
      className="nav-hover nav-link active mx-2 fs-5  my-auto"
      to="/about"
    >
      P2P 
    </NavLink>
    
    </Nav>
    <Nav className="mt-2 mt-md-0">
        <Button variant="outline-light" className="rounded-pill m-2 my-md-0">Play For Free</Button>
        <Button variant="dark" className="rounded-pill bg-accent m-2 my-md-0">Connect Wallet</Button>
       <div className="d-md-none mx-auto mt-4">
        <ButtonGroup>
        <a className="btn m-2 btn-dark bg-accent front rounded-circle border-0 d-flex justify-content-center align-items-center p-2" href="#" role="button"><FaDiscord size={24} /></a>
         <a className="btn m-2 btn-dark bg-accent2 front rounded-circle border-0 d-flex justify-content-center align-items-center p-2" href="#" role="button"><FaTelegramPlane size={24}/></a>
         </ButtonGroup>
         </div>
    </Nav>
  </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;