import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom"

function NavBar() {
    return (
    <Navbar className="pt-4 pb-4" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand as={Link} to="/">Jedediah Arnold</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/about">{"<"} about {">"}</Nav.Link>
                <Nav.Link as={Link} to="/projects">{"<"} projects {">"}</Nav.Link>
                <Nav.Link as={Link} to="/contact">{"<"} contact {">"}</Nav.Link>
                <Nav.Link as={Link} to="/resume">{"<"} resume {">"}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;