import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';




class CustomNavigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Tasty Byte</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/createrecipe">Create Recipe</Nav.Link>
                        <Nav.Link href="/accountsettings">Account Settings</Nav.Link>    
                    </Nav>
                </Navbar.Collapse>
            </Navbar>   
        )
    }
}

export default CustomNavigation;
