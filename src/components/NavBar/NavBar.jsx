/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

function NavBar({ cartCount }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://66d63577f5859a704268a79b.mockapi.io/products")
      .then((res) => res.json())
      .then((res) => setCategories([...new Set(res.map((a) => a.category))]));
  });

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Home
        </Navbar.Brand>
        <Nav className="me-auto">
          {categories.map((cat) => (
            <Nav.Link as={Link} to={`category/${cat}`} key={cat}>
              {cat}
            </Nav.Link>
          ))}
        </Nav>
        <CartWidget cartCount={cartCount} />
      </Container>
    </Navbar>
  );
}

export default NavBar;
