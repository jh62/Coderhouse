/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function ItemDetail({ detail }) {
  return (
    // <div className="item-detail">
    //   <p>{detail?.name}</p>
    //   <p>{detail?.price}</p>
    //   <p>{detail?.description}</p>
    // </div>
    <Col className="p-3">
      <Card>
        <Card.Img variant="top" src={detail?.image} />
        <Card.Body>
          <Card.Title>{detail?.name}</Card.Title>
          <Card.Text>{detail?.description}</Card.Text>
          <Button variant="primary" as={Link} to={`product/${detail?.id}`}>
            Ver producto
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemDetail;
