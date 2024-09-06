/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

function Item({ item }) {
  return (
    <Col lg={3} className="p-3">
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Badge as={Link} to={`category/${item.category}`} bg="secondary">
            {item.category}
          </Badge>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary" as={Link} to={`product/${item.id}`}>
            Ver producto
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
