import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://66d63577f5859a704268a79b.mockapi.io/products")
      .then((res) => res.json())
      .then((res) => setItems(res));
  });

  // setInterval(() => {
  //   setItems(data);
  // }, 50 + Math.random() * 250);
  return (
    <Container>
      <Row>
        <ItemList items={items}></ItemList>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
