import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavLinks from './NavLinks'
import './NavBar.css'

const NavBar:React.FC = () => {
    return (
        <Navbar 
            className="m-2" 
            expand="lg" 
            id="nav-bar"
        >
            <Navbar.Brand href="/">
                Project
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavLinks />
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
