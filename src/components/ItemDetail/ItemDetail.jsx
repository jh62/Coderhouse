/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ItemCount from "../ItemCount/ItemCount";
import { Stack } from "react-bootstrap";

function ItemDetail({ detail, addToCart }) {
  return (
    <Col className="p-3">
      <Card>
        <Card.Img variant="top" src={detail?.image} />
        <Card.Body>
          <Card.Title>{detail?.name}</Card.Title>
          <Card.Text>{detail?.description}</Card.Text>
          <Stack direction="horizontal" gap={3} className="stack-horizontal">
            <ItemCount addToCart={addToCart} />
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ItemDetail;
