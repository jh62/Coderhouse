import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [detail, setDetail] = useState();
  let { id } = useParams();

  useEffect(() => {
    fetch(`https://66d63577f5859a704268a79b.mockapi.io/products/${id}`)
      .then((res) => res.json())
      .then((res) => setDetail(res));
  }, []);

  return (
    <>
      <ItemDetail detail={detail}></ItemDetail>
    </>
  );
}

export default ItemDetailContainer;
