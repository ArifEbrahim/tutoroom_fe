import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

export default function AuthNav() {
    const [link, setLink] = useState('')

    useEffect(() => {
        if (window.location.href.includes('login')) {
            setLink(<Nav.Link as={Link} to="/signup">Sign up</Nav.Link>)
        } else {
            setLink(<Nav.Link as={Link} to="/login">Login</Nav.Link>)
        }
    }, [])    

  return (
    <Navbar bg="primary" variant="dark" expand="md">
        <Container>
            <Navbar.Brand as={Link} to="/" className='h1' id='nav-brand'>Tutoroom</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            {link}
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}
