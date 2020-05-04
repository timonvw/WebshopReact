import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export class Header extends React.Component 
{
    render() 
    {
      return (
        <Navbar collapseOnSelect style={{  marginBottom:'35px'}} expand="lg" bg="dark" variant="dark">
          <Navbar.Brand><Link to='/'>GameCardShop</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <NavDropdown title="Other" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#team">Team</NavDropdown.Item>
                <NavDropdown.Item href="#card">Card</NavDropdown.Item>
                <NavDropdown.Item href="#rules">Rules</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Welcome, Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      );
    }
}