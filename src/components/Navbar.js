import React from 'react'
import Nav from 'react-bootstrap/Nav'
function Navbar() {
    return (
        <div>
          <Nav className="justify-content-center"  as="ul" variant="tabs" >
          <Nav.Item as="li">
            <Nav.Link href="/CheckIn-System/1">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/CheckIn-System/Listofplaces/1">List of Places</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/CheckIn-System/Register/1">Register</Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
    )
}

export default Navbar
