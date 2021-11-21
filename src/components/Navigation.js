import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import {Outlet, NavLink } from "react-router-dom";

function Navigation() {
    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/news">News</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <Button variant="primary">Go</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <Outlet />
    <Footer />
    </>
    )
}

export default Navigation;
