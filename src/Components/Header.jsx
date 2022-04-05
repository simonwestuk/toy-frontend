import React from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Cart from './Cart'
function Header() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Toy Shop</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/register">Register</Nav.Link>
      <Nav.Link as={Link} to="/products">Products</Nav.Link>
      <Nav.Link as={Link} to="/locations">Locations</Nav.Link>
      <Nav.Link as={Link} to="/about">About Us</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact</Nav.Link>


      <Dropdown>
        <Dropdown.Toggle className="mx-4" variant="success" id="dropdown-basic">
          Admin Panel
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item as={Link} to="/admin/addproduct">Add Product</Dropdown.Item>
          <Dropdown.Item as={Link} to="/admin/manageproducts">Manage Products</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      <Cart />
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
