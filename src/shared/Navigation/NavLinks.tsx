import React from 'react'
import { Nav } from 'react-bootstrap'

const NavLinks:React.FC = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link href="/">
                Users
            </Nav.Link>
            <Nav.Link href="todos">
                Todos
            </Nav.Link>
            <Nav.Link href="posts">
                Posts
            </Nav.Link>
        </Nav>
    )
}

export default NavLinks
