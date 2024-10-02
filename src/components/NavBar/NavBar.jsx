/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import { getTags } from "../../firebase/db";

function NavBar({ cartCount }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getTags(setCategories);
  }, []);

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
