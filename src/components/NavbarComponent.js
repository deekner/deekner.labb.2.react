import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import { NavLink } from "react-router-dom"


export const NavbarComponent = () => {
    return(
        <Navbar display="flex" bg="dark" variant="dark" expand ="sm" className="pb-3">
        <Container>
            <Navbar.Brand>Dennis Ekner</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                <Nav.Link as={NavLink} to="/about">About me</Nav.Link>
                <Nav.Link as={NavLink} to="/portfolio">Portfolio</Nav.Link>
                <Nav.Link as={NavLink} to="/resume">My Resume</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">Contact me</Nav.Link>
            </Nav>
            </Navbar.Collapse>

        </Container>
    </Navbar>
    )

}