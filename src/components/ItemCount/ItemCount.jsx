/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

function ItemCount({ addToCart }) {
  function add() {
    addToCart(1);
  }

  function remove() {
    addToCart(-1);
  }

  return (
    <>
      <Button variant="info" onClick={remove}>
        Remover del carrito
      </Button>
      <Button variant="info" onClick={add}>
        Añadir al carrito
      </Button>
    </>
  );
}

export default ItemCount;
