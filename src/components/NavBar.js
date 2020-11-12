import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
    return (
    <Navbar className="pt-4 pb-4" collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Jedediah Arnold</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#">{"<"} about {">"}</Nav.Link>
                <Nav.Link href="#">{"<"} projects {">"}</Nav.Link>
                <Nav.Link href="#">{"<"} contact {">"}</Nav.Link>
                <Nav.Link href="#">{"<"} resume {">"}</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default NavBar;