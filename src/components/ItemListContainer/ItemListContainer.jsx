/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const filterItems = () => {
    return items.filter((item) => item.category === id);
  };

  useEffect(() => {
    fetch("https://66d63577f5859a704268a79b.mockapi.io/products")
      .then((res) => res.json())
      .then((res) => setItems(res.filter((item) => (id ? item.category === id : item))));
    console.log(id);
  }, [id]);

  return (
    <Container>
      <Row>
        <ItemList items={items}></ItemList>
      </Row>
    </Container>
  );
}

export default ItemListContainer;
