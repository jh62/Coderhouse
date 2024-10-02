/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getSingleProduct } from "../../firebase/db";

function ItemDetailContainer({ onAddToCart }) {
  const [detail, setDetail] = useState();
  let { id } = useParams();

  useEffect(() => {
    getSingleProduct(id).then((product) => {
      setDetail(product);
    });
  }, [id]);

  return (
    <>
      <ItemDetail detail={detail} addToCart={onAddToCart}></ItemDetail>
    </>
  );
}

export default ItemDetailContainer;
