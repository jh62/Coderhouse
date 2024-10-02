/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase/db";

function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  const filterItems = () => {
    return items.filter((item) => item.category === id);
  };

  useEffect(() => {
    getProducts(setItems);
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
