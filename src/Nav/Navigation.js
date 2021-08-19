import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React from 'react'

export default function Navigation() {
  
  function logOut()
  {
    localStorage.clear();
  }

  return (
<Navbar bg="primary" variant="dark" expand="md">
  <Container>
    <Navbar.Brand as={Link} to="/" className='h1' id='nav-brand'>Tutoroom</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <Nav.Link as={Link} to="/search">Search</Nav.Link>
      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
      <Nav.Link onClick={logOut} as={Link} to="/">Sign Out</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
