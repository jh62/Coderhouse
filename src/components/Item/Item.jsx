/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap";

function Item({ item }) {
  return (
    <Col lg={3} className="p-3">
      <Card>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">Ver producto</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Item;
